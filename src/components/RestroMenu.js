import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestroMenu=()=>{
   const {resid} = useParams();
  const restroInfo=useRestaurantMenu(resid)
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