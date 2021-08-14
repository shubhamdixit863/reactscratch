import React ,{useState,useEffect}from 'react'
//import axios  from 'axios';

export default function Effec() {
   
    const [leave,setLeave]=useState(0);


console.log("Rendered")
    /// side effects are not allowed here





///()=>increment(1)


/// function (){
    




///
/// this will get called after every render and re render   --->

//  useEffect(sideEffectFunction,[depenedency list])--->

// side effect function gets called after every render  ---?


///  we can trigegr this side effect conditionally 

///  []-->utilize the dependecy array -->

/// 1- Golden rules -->side effect will allways allways gets called after first render -->


///  2-  We can conditionally call the side effeect after other render  -->

useEffect(function(){

    //   the side effect process happens here 
   
    // it depends on you what task you want to perform here --->
   
    // you might call an api
   
    // you can subscribe to event
    // you can do logging
    // you can do database update 
   
    //  ---->anything which is feasible that you as a developer want to perform------>
   
    // when this function gets called for the first time --->it behaves as component did mount
   
    // if the dependecny array is empty --->
    /// this function will get called only once  after first render  --->
   
   })


//  if there is no array -->>
//  -1- sideeffect will be called after the first render and after every subsequent reqnders --->(or any rerenders which happen after that due to state or prop change )


// if there is empty array

// 1-side effect will be called only once after first render -->no calling in subsequent renders-->

// if there is any value in the array 

// 1-side ffect will get called after the first render --> and after any time the value in the array changes















const covidLeave=()=>{

setLeave(leave+1);
}


    return (
        <div>

<h1>{leave}</h1>

            <button onClick={covidLeave} >Leave</button>
           
           
           
           
           

            
            
        </div>
    )
}
