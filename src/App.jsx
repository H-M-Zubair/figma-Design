import "./App.css";
import Facilities from "./Components/facilities";
import FoodSearch from "./Components/FoodSearch";
import Header from "./Components/header/index";
import HeroSection from "./Components/heroSection/Index";
import NearbyDeals from "./Components/nearbyDeals";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FoodSearch />
      <Facilities />
      <NearbyDeals />
    </>
  );
}

export default App;
