import { CON_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props; //console.log(resData)
  if (!resData || !resData.info) {
    return <div>Loading...</div>; // or some other loading indicator
  }
  const { cloudinaryImageId, cuisines, name, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="noimg"
        src={`${CON_URL+cloudinaryImageId}`}
      ></img>
      {console.log(cuisines)}
      <div className="menuContaniner">
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
