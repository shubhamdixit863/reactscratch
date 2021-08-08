import React, { Component } from 'react'

import axios from "axios";

export default class Demo extends Component {

   constructor()
   {
       super()
       console.log("Constructor called")

       this.state={
          data:{},
           page:1
          
       }
   }


   //---->lifecycle of component starts --->


componentDidMount()
{


    /// We gonna be calling the api here which loads th einitial data 

    // api call made 

    // ip --->backend 
    // 3:14 
    console.log('mounted')

    axios.get("http://localhost:9000/getDat2",{params:{id:"6107fca90d5973d48ffd9923"}}).then(data=>{
        console.log(data["data"])

     //   this.setState({data:data["data"].data[0],id:data["data"].data[0]._id})
    })
}

// sideeffect methods --->
componentDidUpdate()
{

    // when your state gets changed
    // when the props that are passed to this component gets changed -->
  axios.get(`http://localhost:9000/getData/${this.state.page}`).then(data=>{
            console.log(data["data"])
            if(this.state.data.name!=data["data"].name)
            {
                this.setState({data:data["data"],id:data["data"]._id})


            }
           

            
    
        })
    

  

}


componentWillUnmount()
{
  ///  --->

  // 3:16pm
  console.log('unmounted')

  /// -->closed the socket connections -->
}

fetchData=(num)=>{


   // this.setState({page:num})

   //this.api()
  
   // this .setState({})

}

// getSta

    render() {
        console.log("Render Called")
        return (
            <div>
                <h2>{this.state.id}</h2>
                <h1>{this.state.data["name"]}</h1>

                <button className="btn btn-success" onClick={()=>this.fetchData(1)}>1</button>
                <button className="btn btn-success" onClick={()=>this.fetchData(2)}>2</button>

                <button className="btn btn-success" onClick={()=>this.fetchData(3)}>3</button>

            </div>
        )
    }
}
