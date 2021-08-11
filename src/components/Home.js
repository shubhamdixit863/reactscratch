import React,{useEffect,useState} from 'react'
import axios  from 'axios';
import {Redirect, useHistory,useLocation} from "react-router-dom"
import ModalPrompt from './partials/ModalPrompt';


function Home(props) {
  const [state,setState]=useState(null);  /// th
  const [showModal,setShowModal]=useState(false);
  let history = useHistory();
  let location=useLocation();




  // so it will play all the roles of component did update /mount and unmount
useEffect(()=>{


  if(location.pathname.includes("something"))
  {
  //  history.push("/home")
 return  <Redirect to="/home"/>
  }





  axios.get("http://localhost:9000/data").then(data=>{
    ///  
    setState({data:data["data"].data})
  
  
  
  }).catch(err=>{
  
    console.log(err);
  })

},[])





const openEdit=(id)=>{

  history.push(`/edit/${id}`)

}

const openDelete=(id)=>{

// Api call 
let value=confirm("Are you really wanto delete this record");
if(value)
{
  /// call the api 
  alert("Record deleted")
}




}

const openAddModal=()=>{
  setShowModal(true);


}

  return (
    <div>
      <button className="btn btn-success" style={{marginBottom:"13px"}}  onClick={openAddModal}> Add Record</button>

    {state? <table className="table table-bordered">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Name</th>
  <th scope="col">Gender</th>
  <th scope="col">Email</th>
  <th scope="col">Balance</th>
  <th scope="col">Picture</th>
  <th scope="col">Age</th>
  <th scope="col">EyeColour</th>
  <th>Edit</th>
  <th>Delete</th>

</tr>
</thead>
<tbody>
{

state.data.map(ele=>(
<tr key={ele._id}>
<td>{ele._id}</td>
<td>{ele.name}</td>
<td>{ele.gender}</td>
<td>{ele.email}</td>
<td>{ele.balance}</td>
<td><img src={ele.picture}></img></td>
<td>{ele.age}</td>
<td>{ele.eyeColor}</td>
<td  style={{cursor:"pointer"}} onClick={()=>openEdit(ele._id)}> <svg className= 'edit' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></td>
<td style={{cursor:"pointer"}} onClick={()=>openDelete(ele._id)} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></td>

</tr>



))}:

 
</tbody>
</table>:"Loading........"}

{showModal?<ModalPrompt/>:""}

    </div>

  )
}

export default Home
