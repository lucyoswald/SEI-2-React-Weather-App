import { useState } from "react";
import axios from "axios";
import CityWeatherCard from "./CityWeatherCard";
import cloudBackground from "/Users/lucy/Documents/Projects/Project_2_Weather_API/src/assets/Bluesky_trees_video.mp4";

const HomePage = () => {
  const [formData, setFormData] = useState({
    city: "",
  });
  const [weatherInfo, setWeatherInfo] = useState(undefined);

  const [showError, setShowError] = useState(false);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=e20b142cfbfc435facb115458230402&q=${formData.city}`,
        formData
      );
      console.log(data);
      setWeatherInfo(data);
      localStorage.setItem("token", data.token);
    } catch (e) {
      setShowError(true);
    }
  };

  return (
    <div className="homepage">
      <video
        src={cloudBackground}
        autoPlay
        loop
        muted
        className="cloud_video"
      />
      <h1 className="homepage_header">What's the weather where you are?</h1>

      <section>
        <form className="weather-form" onSubmit={onSubmit}>
          <input
            className="city_search"
            value={formData.city}
            type="text"
            placeholder="Type in your city..."
            onChange={onChange}
            name="city"
          ></input>
          <button>Submit</button>
        </form>
      </section>
      <CityWeatherCard weatherInfo={weatherInfo} />
    </div>
  );
};

export default HomePage;
