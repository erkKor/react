import "./styles/style.min.css"
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


function App() {
  return (
    <>
    <Navbar />
    <Showcase />
    <ShowcaseCardBigSmall />
    <FeaturedProducts />
    <ShowcaseCardDouble />
    <OurSpeciality />
    <BigSquareWCardsLeft />
    <BigSquareWCardsRight />
    <SaleBanner />
    <TrippleColumnProducts />
    <InfoIcons />
    <Footer />
    </>
  );
}

export default App;


/* 
  import Logo from '../assets/images/logo.svg'
  <img src={Logo} />

  <div style={{"height": "300px"}}></div>
*/