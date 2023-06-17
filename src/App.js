import HeaderNavbar from './components/navbar/TopNav';
import BottomNav from './components/navbar/BottomNav';
import './index.css';
import FrontCarousel from './components/FrontCarousel';
import OurMissionBanner from './components/missionBanner/OurMissionBanner';
import Services from './components/Services';
import Greeting from './components/Greeting';
import SecondBanner from './components/SecondBanner';
import Programs from './components/Programs';




function App() {
  return (
    <div className="App">
      <HeaderNavbar/>
      <BottomNav/>
      <FrontCarousel />
      <Services/>
      <OurMissionBanner/>
      <Greeting/>
      <SecondBanner/>
      <Programs/>
    </div>
  );
}

export default App;
