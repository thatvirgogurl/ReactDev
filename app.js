import React from 'react';
import ReactDOM  from 'react-dom/client';
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "namste react course"
// );

//jsx=babel transpies iit to react.createElemnts=>end of the data its an object=>when it render i conevrt htmlelemnt
const ele=<h1>elemnt</h1>
const jsxheading = (
  <>
    {ele}
    <h1 id="heading">namste react course</h1>
    <h1 id="heading">namste react course</h1>
  </>
);
const NUM=1000
const TitleCopm=()=><h1>CHildheading</h1>
    const HeadingComponent = () =>{
      return (
        <div>
          {TitleCopm()}
          <TitleCopm />
          <TitleCopm></TitleCopm>
          {jsxheading}
          <h1>hello!</h1>
          <h2> {NUM}</h2>
        </div>
      );

    }
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />);