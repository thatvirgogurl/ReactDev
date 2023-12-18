import React  from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      count1: 0,
      count2: 1,
      localStateVariable: {
        name: "dummy",
        location: "default",
        avatar_url: "dummy",
      },
    };
    //console.log(this.props.name+"child constrocter called");
  }
   async componentDidMount() {
    //console.log(this.props.name+"child componnetDidMountis Called");
    //Api call
    const data=await fetch('https://api.github.com/users/akshaymarch7')
    const jsondata=await data.json()
    console.log(jsondata)
    this.setState({
      localStateVariable: jsondata,
    });
  this.timer=  setInterval(()=>{
console.log('counted')
    },1000)
  }
  componentDidUpdate(){
    console.log("componentDidUpdate is called");
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("componentWillUnmount is called");//when we move a new page this is called
  }
  render() {
    console.log(this.props.name+"child render");
    const { name } = this.props;
    const { count1, count2,localStateVariable } = this.state;
    //console.log(count1, count2, name);
    return (
      <div className="user-card">
        <img src={localStateVariable.avatar_url}></img>
        <h2>Name:{localStateVariable.name}</h2>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count1 + 2,
            });
          }}
        >
          ClassBased
        </button>
        <h1>{count1}</h1>
        <h3>email:{this.props.Contact} </h3>
        <h3>Location:{localStateVariable.location} </h3>
        <h4>pinCode:{this.props.pinCode} </h4>
      </div>
    );
  }
}
export default UserClass;