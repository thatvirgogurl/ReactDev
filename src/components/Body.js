import RestaurantCard from './RestaurantCard'
// import data from "../utils/resData";
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'
// useState use only inside componnet //it is use for creating local state variavle inside componnet
//useState use in top of the componnet for better practice
//never crate useState inside any conditional statement//this can create inconsistancy in your program
const Body = () => {
//when state variable updated,react triggers a reconcillation cycle (re-resnders the componnets)
//when yoou type in searchbar for each and every letter react rerender component
  const [listOfRestaurants, setListOfRestro] = useState([]);
const[searchText,setSearchText]=useState("")
const [filetredRestro,setFiltetrRestro] = useState([]);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.256207128933887&lng=85.78774999827147&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const jsonData = await data.json();
  console.log(
    jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  );
  //use Optional Chainning
  
  setListOfRestro(
    jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setFiltetrRestro(
    jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  );

};
useEffect(() => {
  fetchData();
}, []);
//conditional Rendering
// if(listOfRestaurants.length===0){
//   return <Shimmer/>
// }

//using terminaryOperater
return listOfRestaurants.length === 0 ? (
  <Shimmer></Shimmer>
) : (
  <div className="body">
    <div className="filetr">
      <input
        type="text"
        className="serch-box"
        placeholder="Name Of Restro"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          //filterthe restro cards updated the Ui
          // setSearchText()
          console.log(searchText);
          const fiterRestro = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );

          setFiltetrRestro(fiterRestro);
        }}
      >
        Search
      </button>

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
      {filetredRestro.map((data) => (
        <Link to={"./restaurants/" + data.info.id} key={data.info.id}>
          <RestaurantCard resData={data} />
        </Link>
      ))}
    </div>
  </div>
);
 
};
export default Body;
