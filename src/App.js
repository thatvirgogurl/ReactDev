import React from 'react';
import ReactDOM  from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from './components/Header.js';
import Body from './components/Body.js';
import Fotter from './components/Footer.js';
import { About } from './components/About.js';
import ContactUs from './components/ContactUs.js';
import Error from './components/Error.js'
import RestroMenu from './components/RestroMenu.js'

///chunking
//code splitting
//dynamic bundling

const AppContainer=()=>{
  return (
    <div className="app">
      <Header />
      {/* path:'/' */}
      {/* <Body /> */}
      {/* path:'/about' */}
      {/* <About /> */}
      {/* path:'/contact' */}
      {/* <ContactUs/> */}
      <Outlet/>
      <Fotter></Fotter>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestroMenu />,
      },
    ],
  },
]);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);