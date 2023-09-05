// const heading = React.createElement("h1", {id:"heading"}, "hello world");

{/* <div id= parnt>
    <div  id=childer>
        <h1 id=1st>

        </h1>
        <h1 id=2nd>

        </h1>
    </div>
</div> */}
//its look so messy thats why JSX introduce
const parent = React.createElement(
  "div",
  { id: "par" },
  [React.createElement("div", { id: "childer1" }, [
    React.createElement("h1", { id: "1st" }, "helll im 1st syblling"),
    React.createElement("h1", { id: "2nd" }, "hello im 2nd syblling"),
  ]),
  React.createElement("div", { id: "childer2" }, [
    React.createElement("h1", { id: "1st" }, "helll im 1st syblling"),
    React.createElement("h1", { id: "2nd" }, "hello im 2nd syblling"),
  ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent)