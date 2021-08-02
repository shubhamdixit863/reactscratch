import React, { Component, Fragment } from 'react'
import data from "../../data.json";
 class Home extends Component {
   

  constructor(props)
  {

      super(props)
  }

    render() {
      
        return (
          
              
            
            <table className="table table-bordered">
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
   
    </tr>
  </thead>
  <tbody>
    
    {data.map(ele=>(
        <tr>
       <td>{ele._id}</td>
       <td>{ele.name}</td>
       <td>{ele.gender}</td>
       <td>{ele.email}</td>
       <td>{ele.balance}</td>
       <td><img src={ele.picture}></img></td>
       <td>{ele.age}</td>
       <td>{ele.eyeColor}</td>
    
        </tr>



    ))}
  </tbody>
</table>
          
         
        )
    }
}

export default Home;