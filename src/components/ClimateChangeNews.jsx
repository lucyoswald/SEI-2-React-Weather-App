import { useEffect, useState } from "react";
import axios from "axios";
import ClimateChangeNewsCard from "./ClimateChangeNewsCard";
import iceCapsVideo from "/Users/lucy/Documents/Projects/Project_2_Weather_API/src/assets/pexels-taral-chaudhari-8223002.mp4";
const ClimateChangeNews = () => {
  const [climateNews, setClimateNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const options = {
          method: "GET",
          url: "https://climate-news-feed.p.rapidapi.com/",
          headers: {
            "X-RapidAPI-Key":
              "9102ace32amsh4d7405d1d1dd687p1795bejsn0855f9247223",
            "X-RapidAPI-Host": "climate-news-feed.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);

        const filteredData = response.data.articles.filter(
          (newsItem) => newsItem.url && newsItem.url.startsWith("https:")
        );

        setClimateNews(filteredData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <body className="climate_background">
      <video src={iceCapsVideo} autoPlay loop muted className="icecaps_video" />
      <div className="climate_change_page">
        <h1 className="climate_change_header">
          See below links to recent articles on Climate Change...
        </h1>
        {loading ? (
          <h2 className="climate_loading">Content loading...</h2>
        ) : (
          <ul className="climate_container">
            {climateNews.map((climate) => (
              <ClimateChangeNewsCard climate={climate} />
            ))}
          </ul>
        )}
      </div>
    </body>
  );
};

export default ClimateChangeNews;
