import React from 'react';
import ReactDOM  from 'react-dom/client';


import Header from './components/Header.js';
import Body from './components/Body.js';
import Fotter from './components/Footer.js';



const AppContainer=()=>{
  return (
    <div className="app">
      <Header/>
      <Body></Body>
      <Fotter></Fotter>
    </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppContainer />);