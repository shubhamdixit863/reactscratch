import React from 'react'
import {useHistory} from "react-router-dom";

function History() {
 const history= useHistory();
 console.log(history);


const moveToHome=()=>{
    //history.push("/home")

   // history.goBack();
   history.goForward();

    

}


   
    return (
        <div>
            <h1>History</h1>

            <button className="btn btn-success"  onClick={moveToHome}>Move To Home Page</button>
        </div>
    )
}

export default History
