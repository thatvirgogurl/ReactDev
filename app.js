import React from 'react';
import ReactDOM  from 'react-dom/client';
import data from './menu.js'
/*
1.header
 -Logo
 -navItems
2.body
 -searchbar
 -restoContainer
  -restroCart
   -image
   -name
   -star rating,cuisine,etc,delivary tym
3.footer
 -copyr8
 -links
 -address
 -contact
*/
const Header=()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img  className="logo" src="https://th.bing.com/th?id=OIP.JNKXUNrMj40hU9_hWLn_1gHaEb&w=323&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
      </div>
      <div className="navItems">
        <ul>
          
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
const styleCard={
 // backgroundColor:"#f0f0f0f0"
}
 const restaurantList =
   data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
const RestaurantCard=(props)=>{
  const { resData } = props;//console.log(resData)
   if (!resData || !resData.info) {
     return <div>Loading...</div>; // or some other loading indicator
   }
 const { cloudinaryImageId, cuisines, name, avgRating, sla, costForTwo } =
   resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="noimg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      ></img>
      {console.log(cuisines)}
      <div className='menuContaniner'><h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4></div>
     
    </div>
  );
}
//not using keys(not accepteable) <<< index as keys not use unique key
const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* //RestaurantCard */}
        {restaurantList.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} />
        ))}

        <RestaurantCard resData={restaurantList[1]} />
        <RestaurantCard resData={restaurantList[2]} />
        <RestaurantCard resData={restaurantList[3]} />
        {/* {RestaurantCard({ResNmae:"BURGER KING2",cusines:"North Indian,Asian"})} */}
      </div>
    </div>
  );
}
const AppContainer=()=>{
  return (
    <div className="app">
      <Header/>
      <Body></Body>
      {/* //body
      //fotter */}

    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppContainer />);