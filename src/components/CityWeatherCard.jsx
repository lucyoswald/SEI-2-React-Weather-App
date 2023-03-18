const CityWeatherCard = ({ weatherInfo }) => {
  if (weatherInfo === undefined) {
    return null;
  } else {
    return (
      <div className="weather_card">
        <h4 className="heading__city">
          Weather in your chosen city right now...
        </h4>
        <h4 className="heading__location">
          {weatherInfo.location.name}, {weatherInfo.location.country}
        </h4>

        <p className="heading__weatherstatus">
          Weather right now is{" "}
          {weatherInfo.current.condition.text.toLowerCase()} with a temperature
          of {weatherInfo.current.temp_c}°C . It feels like:{" "}
          {weatherInfo.current.feelslike_c}°C, with winds of{" "}
          {weatherInfo.current.wind_mph}mph. With {weatherInfo.current.cloud}%{" "}
          cloud coverage currently.
        </p>

        <img
          src={weatherInfo.current.condition.icon}
          alt="weather-image"
          className="heading__image"
        />
        <p className="heading__uv"> The UV level is {weatherInfo.current.uv}</p>
        {/* <p>The local time is {weatherInfo.location.localtime}</p> */}
      </div>
    );
  }
};

export default CityWeatherCard;
