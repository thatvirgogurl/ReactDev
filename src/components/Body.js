import RestaurantCard from './RestaurantCard'
import data from "../utils/resData";
import { useState } from 'react';

 const restaurantList =
   data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

const Body = () => {
  //state variable
  //normal js variablee
  const [listOfRestaurants, setListOfRestro] = useState(restaurantList);
//OR const arr = useState(restaurantList);
//OR const [listOfRestaurants,setListOfRestro]=arr
  return (
    <div className="body">
      <div className="filetr">
        <button
          className="filetr-btn"
          onClick={() => {
            const fiterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestro(fiterList);
            
            // console.log(listOfRestaurants)
          }}
        
        >
          Top Rated Restro
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} />
        ))}
        
      </div>
    </div>
  );
};
export default Body;
