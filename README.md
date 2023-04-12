
## SEI Project 2 - Weather API React App

For project 2 we were asked to make a front-end React web app, using a free public API. 
My app allows users to search for any city and get the current weather information for that location in the form of a weather card. In addition to the main feature, the app also includes two other pages: one that displays the dates on which the ocean temperature has increased over the years and another that provides links to articles on climate change. 
The app was built using three external public APIs to obtain the weather data, ocean temperature data, and news articles. 

#### Link to live site: https://glittery-dodol-1d8d5c.netlify.app/

## Project Brief
* Consume a public API – this could be anything but it must make sense for your project
* Have several components - At least one classical and one functional
* The app can have a router - with several "pages", this is up to your descretion and if it makes sense for your project
* Include wireframes - that you designed before building the app
* Be deployed online and accessible to the public

## 🛠 Technologies Used

HTML | CSS | JavaScript | React.js | SCSS | Postman | Git | GitHub | Netlify

## Timeframe
1 week | Solo project


## Project Brief
* Render a game in the browser
* Be built on a grid: do not use HTML Canvas for this
* Design logic for winning & visually display which player won
* Include separate HTML / CSS / JavaScript files
* Use Javascript for DOM manipulation
* Deploy your game online, where the rest of the world can access it (we will do this together at the end of the project)
* Use semantic markup for HTML and CSS (adhere to best practices)

## Planning

I started planning by heading onto Exclidraw and working and mapping out the main page, I knew I wanted a clean search bar as the main homepage and that once the user typed in their chosen city a weather card would appear with the current weather, along with a little emoji like a cloud or sun etc. I also knew I wanted to keep the search bar on the page too so that the user wouldn’t have to click back to the homepage in case they wanted to just try another city. The card would just update everytime they typed something in so it felt seamless.

1. I worked on Excalidraw just mapping out my homepage that would include the search bar.
2. Then the weather card and how that would look.

<img width=90% src="https://user-images.githubusercontent.com/116687424/228586877-4efcab82-62bf-448c-a255-3cfcc3971173.png">


## Build/Code process

Creating the weather card on search: 

* The code above defines a React component called CityWeatherCard that renders a card displaying weather information for a given city. 
* The component takes a single prop called weatherInfo, which is an object containing weather data for the specified city.
* If weatherInfo is undefined, meaning there is no weather data available, the component returns null and does not render anything.
* If weatherInfo is defined, the component renders a div element with the class weather_card. 
* The component displays the name and country of the city, as well as the current weather conditions, temperature, feels like temperature, wind speed, cloud coverage, and UV level. 
* It also displays an icon representing the current weather condition. 

See the code below:

``` js
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
```
Keeping the search bar once the card is rendered:

* I defined two state variables using the useState hook: formData and weatherInfo.
* The object formData contains the user's input for the city search bar, and it is updated with setFormData when the user types in the search bar.
* Then, weatherInfo is used to store the weather information for the searched city, and it is updated with the setWeatherInfo function when the API call returns data for the searched city.
* Conditionally rendering the CityWeatherCard component based on the value of weatherInfo, I ensured that it is only displayed when there is data available, and that the search bar remains visible at all times.
* By doing this I made sure that the user can always search for a different city and see the corresponding weather information without having to navigate back to the search bar. 

See code below:

``` js
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

```

``` js
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
```

I actually ended up having a bit of extra time towards the end of my project so I decided to locate two more API’s that I thought suited the theme of my project and created two further pages from them. 

### Ocean Warming Page: 

In this page the code is fetching data from an API that shows the ocean temperature data over the years. Once the data is processed I also used the reverse method to ensure it displayed the most recent data first. The data is then stored into a state and mapped over to display my OceanWarmingCard component, this just displays the year + temperature. There is also a link if you click on the earth emoji to the API which provides further information about climate change in general. 

``` js
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
  ```
  ### Climate Change Page: 
  
  Similarly as above in this page the code is fetching data from an external API which is a collection of news articles on climate change. Once the data is processed it is then stored into a state and mapped over to display my ClimateChangeNewsCard component. The cards on this page have a shortened title of the specific news article - I used .substring() to ensure the cards all had the same size and specific length of the title. The cards then have a clickable link emoji that takes you to the specific news article. 
  
  ``` js
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
      const { data } = await axios.get(
        "https://climate-change-live402.p.rapidapi.com/news",
        {
          headers: {
            "X-RapidAPI-Key":
              "9102ace32amsh4d7405d1d1dd687p1795bejsn0855f9247223",
          },
        }
      );
      const filteredData = data.filter((newsItem) =>
        newsItem.url.startsWith("https:")
      );
      setClimateNews(filteredData);
      setClimateNews(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);
    ```
    
      ``` js
      import LinkImage from "/Users/lucy/Documents/Projects/Project_2_Weather_API/src/assets/Link_icon.png";
import { Link } from "react-router-dom";

const ClimateChangeNewsCard = ({ climate }) => {
  return (
    <div className="climate_card">
      <h3 className="climate_header">{climate.title.substring(0, 80)}</h3>
      <Link to={climate.url} target="_blank">
        <img src={LinkImage} alt="link image" className="link_image" />
      </Link>
    </div>
  );
};

export default ClimateChangeNewsCard;

```
  
## Styling
* I wanted to create some moveable backgrounds for my pages using video clips - I continued this theme throughout all my pages, the homepage background being my favourite out of the three. 
* I also implemented a ‘Content loading’ for my pages by setting a setLoading state and then to make it appear as though it was moving I used Transform.  

```scss
.ocean_loading {
  color: #fff;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px rgb(30, 100, 77), 0 0 151px #0fa;
  text-align: center;
  margin-top: 190px;
  font-size: 20px;
  animation: flicker 1.5s infinite alternate;
}

.earth {
  padding-left: 22px;
  color: whitesmoke;
  margin-top: -12px;
  font-size: 16px;
}

.earth_link {
  text-decoration: none;
  cursor: pointer;
}

@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
      0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
  }
}
```
##  Finished Product 

<img width=100% src="https://user-images.githubusercontent.com/116687424/230693874-eeec1dcd-7f86-4d1a-b844-9d923b987426.mp4">



## Wins & Challenges

### Wins:

Overall I am pleased with the styling of the product, I really like the clean look/simplicity of the homepage. I think it’s user friendly and an enjoyable product to use.
I think the app is actually a useful app and provides accurate and helpful weather information for users - it has a real purpose in everyday life!
I feel as though my vision when starting the planning was really achieved, making the weather card appear was always something I was worried about figuring out so I am really pleased I got there in the end + was even able to add further pages to my app which definitely furthered my understanding of React. 

### Challenges: 

Developing my first React application from scratch presented me with a significant number of obstacles; adapting to the asynchronous nature of state changes proved to be one of the most demanding aspects of the project,
Nevertheless, it was the use of Weather APIs that proved to be particularly challenging as it was tough to find a free API that offered the desired properties. This is likely due to the fact that such APIs have significant commercial value, and most providers require payment. As a result, there are only a few free APIs that offer accurate data and a sufficient range of properties for working with.


## Key Learnings

I feel like I learnt so much from this project, I found it so cool being able to grab data from an API and actually make a functional webpage that had a use and would be valuable to people. I feel so much more confident with React after this project along with the use of API’s and Postman.  I am really looking forward to creating further web applications and to continue building on my knowledge. 


## Future Improvements

* The user being able to log in and have a profile on this system.
* Then having weather info dependent on the user’s profile information that they put in when they registered. 
* They could then have a list of favourite places saved to their profile which they could flick through to see the weather for each one. 
* Making my ocean warming & climate change pages more interactive.
* Ocean Warming: not just having a list of data but maybe drop downs for each box with facts about that time of year.
* Climate Change: maybe also more data about what people can do on their part to help negate the impact of climate change - i.e small life changes + petitions etc. 
