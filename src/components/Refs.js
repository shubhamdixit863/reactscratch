import React, { Component } from 'react'


// refs are an react utility to interact with traditional dom
export default class Refs extends Component {

    
    render() {
        return (
            <div>

<div>
                <labe>name:</labe>
                <input ref={(input)=>this.name=input} type="text" name="name"/><br></br>

                </div>
                <div><labe>Age:</labe>
<input type="text" name="email"/>

                </div>
            </div>
            

              

           
        )
    }
}
