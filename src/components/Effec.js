import React ,{useState,useEffect}from 'react'
import axios  from 'axios';

export default function Effec() {
    const [state,setState]=useState(0);



    /// side effects are not allowed here

useEffect(function(){


    axios.get(`http://localhost:9000/getData/${state}`).then(data=>{

    console.log(data["data"]);
    })


    return ()=>{

        
    }






},[state])  // IF THE ARRAY IS EMPTY USEEFFECT WONT GET FIRED INS UBSEQUENT RERENDERS

const increment=(value)=>{


   // setState(state+value);
    axios.get(`http://localhost:9000/getData/${value}`).then(data=>{

        console.log(data["data"]);
        })
    
    
   ///  setState(state++); //why //this not working   ===> state=state+1

}




///()=>increment(1)


/// function (){
    


    return (
        <div>
            <h1>{state}</h1>

            <button onClick={()=>increment(1)}>1</button>
           
           
           
           
            <button onClick={()=>increment(2)}>2</button>

            
            
        </div>
    )
}
