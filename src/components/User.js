import {useState}  from 'react'
const User=({name})=>{
    const [count,setCount]=useState(0)
    const [count2, setCount2] = useState(1);
return (
  <div className="user-card">
    <h1 onMouseMove={()=>{
        setCount((preCount)=>preCount+=1)
       
       }}
       >Count={count}</h1>
       <h1>{count2}</h1>
       <button onClick={()=>{

        setCount2(count2+1)

       }}>FunBased</button>
    <h2>Name:{name}</h2>
    <h3>Location:odisha</h3>
    <h4>Contact:mishraMonalisa9@gamil.com</h4>
  </div>
);
}
export default User;