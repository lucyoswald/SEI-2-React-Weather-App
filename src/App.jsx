import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import CityWeatherCard from "./components/CityWeatherCard";
import OceanWarming from "./components/OceanWarming";
import OceanWarmingCard from "./components/OceanWarmingCard";
import ClimateChangeNews from "./components/ClimateChangeNews";
import ClimateChangeNewsCard from "./components/ClimateChangeNewsCard";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>;
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Exo+2&family=Poppins&display=swap');
</style>;

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/CityWeatherCard" element={<CityWeatherCard />}></Route>
        <Route path="/OceanWarming" element={<OceanWarming />}></Route>
        <Route path="/OceanWarmingCard" element={<OceanWarmingCard />}></Route>
        <Route
          path="/ClimateChangeNews"
          element={<ClimateChangeNews />}
        ></Route>
        <Route
          path="ClimateChangeNewsCard"
          element={<ClimateChangeNewsCard />}
        ></Route>
      </Routes>
    </div>
  );
};
export default App;
