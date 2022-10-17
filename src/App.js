import "./styles/style.min.css"
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import ShowcaseCardBigSmall from "./components/ShowcaseCardBigSmall";
import FeaturedProducts from "./components/FeaturedProducts";
import ShowcaseCardDouble from "./components/ShowcaseCardDouble";
import OurSpeciality from "./components/OurSpeciality";
import BigSquareWCardsLeft from "./components/BigSquareWCardsLeft";
import BigSquareWCardsRight from "./components/BigSquareWCardsRight";
import SaleBanner from "./components/SaleBanner";
import TrippleColumnProducts from "./components/TrippleColumnProducts";
import InfoIcons from "./components/InfoIcons";
import Footer from "./components/Footer"

import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import NotFoundView from "./views/NotFoundView";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/Contacts" element={<ContactView />}/>
        <Route path="*" element={<NotFoundView />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/* 
  import Logo from '../assets/images/logo.svg'
  <img src={Logo} />

  <div style={{"height": "300px"}}></div>
*/