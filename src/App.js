import HeaderNavbar from './components/navbar/TopNav';
import './index.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen'
import ContactScreen from './Screens/ContactScreen';
import AboutScreen from './Screens/AboutScreen';
import 'animate.css'
import RehabilitaionScreen from './Screens/RehabilitaionScreen';
import NursingCareScreen from './Screens/NursingCareScreen';
import AdditionalServicesScreen from './Screens/AdditionalServicesScreen';
import PageNotFoundScreen from './Screens/PageNotFoundScreen';


function App() {
  return (
    <Router>
      <HeaderNavbar  />
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/rehab-programs" element={<RehabilitaionScreen />} />
          <Route path="/additional-services" element={<AdditionalServicesScreen />} />
          <Route path="/nursing-care" element={<NursingCareScreen />} />
          <Route path="*" element={<PageNotFoundScreen />} />       
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
