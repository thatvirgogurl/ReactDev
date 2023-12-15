#parcel
-dev build
-local server
-HMR-hot module replacemnt(referece automatically if anything chenges and saved)
-file watching algo written in c++
-caching-faster build
-image optimization
-minification
-bundling
-compressing
-consistent hashing
-code splitting
-differntial bulding-support older browsers
-erro handling
-diagonstic
-https
-tree shaing algo-remove unused code
-difffrent dev and prod bundles
//food oreder app

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

////restro modify data
 {
   /* {data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.map(
        (x) => {
          console.log(x.info.cuisines);
          console.log(x.info.name);
        }
      )} */
 }


 Two Type of Export/Import

 -deafult Export/Emport

 export default componnet;
 import component from path

 -name Export/Import;

 export cost componnent=()=>{
  return ()
 }
 import {componnet}  from path;



 //React Hooks
 Normal js utility functions
 written inside react(when npm i react)
 imp hooks
 1.useState()-superPowerFull state variable in react
 2.useEffect()