import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';

const center = {
    lat: 42.029507646164156,
    lng: -87.8934861419573,
};

const containerStyle = {
    width: '100%',
    height: '400px',
};



const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_API_KEY}`,
        libraries: ['places'],
    });

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        if (isLoaded) {
            const service = new window.google.maps.places.PlacesService(document.createElement('div'));
            const request = {
                location: center,
                radius: 5000,
                type: 'hospital',
            };

            service.nearbySearch(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setHospitals(
                        results.map((result) => ({
                            lat: result.geometry.location.lat(),
                            lng: result.geometry.location.lng(),
                            title: result.name,
                        }))
                    );
                }
            });
        }
    }, [isLoaded]);

    function createKey(location) {
        return location.lat + location.lng;
    }

    function handleMarkerClick(marker) {
        setSelectedMarker(marker);
    }

    function handleInfoWindowClose() {
        setSelectedMarker(null);
    }

    const mapOptions = {
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
            },
        ],
    };

    return (
        <>
            {isLoaded && (
                <GoogleMap center={center} zoom={13} mapContainerStyle={containerStyle} options={mapOptions}>
                    {hospitals.map((hospital) => (
                        <Marker key={createKey(hospital)} position={hospital} onClick={() => handleMarkerClick(hospital)} />
                    ))}
                    {selectedMarker && (
                        <InfoWindow position={selectedMarker} onCloseClick={handleInfoWindowClose}>
                            <div>{selectedMarker.title}</div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </>
    );
};

export default Map;