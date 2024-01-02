import User  from "./User"
import UserClass from "./UserClass"
import React from  "react"
export class About extends React.Component{
    constructor(){
        super()
        console.log("parent Constructor")
    }
    componentDidMount(){
        console.log('Parnet componnetDidMountis Called')
    }
render(){
    console.log("parent render")
    return (
      <div>
        <h1>AboutUs</h1>
        <h2>its a food oredering App</h2>
     
        <UserClass
          name={"monalis a classbased"}
          location={"BBSR,Odisha"}
          pinCode={755007}
          Contact={"mishraMonalisa9@gamil.com"}
        />
  
      </div>
    );
}
}
// export const About=()=>{
//     return (
//         <div>
//             <h1>AboutUs</h1>
//             <h2>its a food oredering App</h2>
//             <User name={"abhipsha"}/>
//             <UserClass name={"monalis a classbased"} location={'BBSR,Odisha'} pinCode={755007} Contact={"mishraMonalisa9@gamil.com"}/>
//         </div>
//     )
// }