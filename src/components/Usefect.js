import { GetAppOutlined } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'


/// child component --->

const Data=(props)=>{

    useEffect(function(){

console.log("Child Render Compoenent ")

/**
 * theApiCall(props.data)
 * */
    },[props.data])

    return (

        <div>
            <h2>{props.count}</h2>

        </div>
    )
}

function Usefect() {

    const  [state,setState]=useState(0);

    const  [count,setCount]=useState(0);

   const changeState=()=>{

    ///Chandu will answer this -->
    
  setState(state+1);   /// immutabilty and muttablity -->eference type and primitive type -->

} 


const changeCount=()=>{

    ///Chandu will answer this -->
    
  setCount(count+10);   /// immutabilty and muttablity -->eference type and primitive type -->

} 


///console.log("Rendering the component ..............")

/*
useEffect(function(){

    console.log("this wil execute after first render and after every time the state value is changed")

},[state])
*/



    return (
        <div>

          
            <button onClick={changeState}>Change Count</button>
            <button onClick={changeCount}>Change Data</button>


            <Data   count={state}  data={count}/>
            
        </div>
    )
}

export default Usefect
