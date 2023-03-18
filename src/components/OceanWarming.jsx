import { useEffect, useState } from "react";
import axios from "axios";
import OceanWarmingCard from "./OceanWarmingCard";
import OceanVid from "/Users/lucy/Documents/Projects/Project_2_Weather_API/src/assets/Ocean_warming_video.mp4";
import { Link } from "react-router-dom";

// import OceanWarmingInfo from "https://global-warming.org/";

const OceanWarming = () => {
  const [oceanTemp, setOceanTemp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://global-warming.org/api/ocean-warming-api"
      );
      console.log(data);

      const processedData = Object.keys(data.result)
        .reverse()
        .map((year) => {
          return { year: year, temp: data.result[year] };
        });
      setOceanTemp(processedData);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(oceanTemp);
  return (
    <div className="ocean_warming">
      <video src={OceanVid} autoPlay loop muted className="ocean_video"></video>
      <h3 className="ocean_header">
        The ocean temperature has been rising over the years...
      </h3>
      <h3 className="earth">
        Find out more by clicking on the earth....
        <Link
          className="earth_link"
          to="https://global-warming.org/"
          target="blank"
        >
          🌎
        </Link>
      </h3>
      {loading ? (
        <h2 className="ocean_loading glow">Content loading...</h2>
      ) : (
        <ul className="ocean_container">
          {oceanTemp.map((year) => (
            <OceanWarmingCard year={year} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default OceanWarming;
