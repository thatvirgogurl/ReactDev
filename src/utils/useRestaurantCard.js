import { useState ,useEffect} from "react";
const useRestaurantCard = () => {
  const [listOfRestaurants, setListOfRestro] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.256207128933887&lng=85.78774999827147&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    //use Optional Chainning

    setListOfRestro(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
   
  };
  useEffect(() => {
    fetchData();
  }, []);
  return listOfRestaurants;
};
export default useRestaurantCard;
