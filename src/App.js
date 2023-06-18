import HeaderNavbar from './components/navbar/TopNav';
import './index.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen'
import ContactScreen from './Screens/ContactScreen';


function App() {
  return (
    <Router>
      <HeaderNavbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
