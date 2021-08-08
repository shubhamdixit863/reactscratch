import React,{useEffect,useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom";

function Edit(props) {
    //const [id,setId]=useState({});
    const [state,setState]=useState({
       name:"",
       email:"",
       balance:""

    });
 
    //{state!=0? <>:""}
    
    
    let params = useParams();
    

    //  1- I have to get the id of the data from the url
    // 2-I have to get the data for that particular id from our backend 
    // using axios ---> 

useEffect(() => {

        //----

        axios.get(`http://localhost:9000/getData/${params.id}`).then(data=>{
            console.log(data["data"]);
            setState(data["data"])


        }).catch(err=>{
            console.log(err);
        })


      
    }, [])

   const  handleChange=(event)=>{

        setState({[event.target.name]:event.target.value})

    }


    return (
        <div>

<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  name="name" value={state.name} aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email"/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  name="email" value={state.email} aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email"/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Balance</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="balance" value={state.balance} aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email"/>
  </div>
  <button type="submit" className="btn btn-primary">Edit</button>
</form>
            
        </div>
    )
}

export default Edit
