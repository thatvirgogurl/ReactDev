import { useEffect,useState } from "react"

const useRestaurantMenu= (resid)=>{
    //fetch the data
    const [restroInfo, setRestroInfo] = useState(null);
    const fetchMenu = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.256207128933887&lng=85.78774999827147&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER` //655341
      );
      const jsonData = await data.json();
      setRestroInfo(jsonData.data);
    };

    useEffect(() => {
      fetchMenu();
    }, []);
return restroInfo;

}
export default useRestaurantMenu