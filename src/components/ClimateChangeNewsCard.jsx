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
