import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroMenu=()=>{
  // const params=useParams()
  //console.log(params)//{resid: "2"}
   const {resid} = useParams();
  const [restroInfo, setRestroInfo] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.256207128933887&lng=85.78774999827147&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER` //655341
    );
    const jsonData = await data.json();
    setRestroInfo(jsonData.data);
    //console.log(jsonData.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  if (restroInfo === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatingsString,
  } = restroInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards[0].card.info.name);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name+"-"}{menu.card.info.price/100 
}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestroMenu;