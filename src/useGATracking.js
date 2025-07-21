// // src/useGATracking.js
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const useGATracking = () => {
//     const location = useLocation();

//     useEffect(() => {
//         if (window.gtag) {
//             window.gtag('config', 'G-3TVMEZ41VG', {
//                 page_path: location.pathname + location.search,
//             });
//         }
//     }, [location]);
// };

// export default useGATracking;


// src/GATracker.js
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const GATracker = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag('config', 'G-3TVMEZ41VG', {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};

export default GATracker;

