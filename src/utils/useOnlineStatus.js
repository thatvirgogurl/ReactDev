import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [status,setStatus]=useState(true)

    //checking if online
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false);
        })
        window.addEventListener("online",()=>{
            setStatus(true)
        })
    },[]);


    // return boolenan value
    return status;
}
export default useOnlineStatus;
//on9 event listner//window online event