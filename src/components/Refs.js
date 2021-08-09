import React, { Component } from 'react'



// refs are an react utility to interact with traditional dom
export default class Refs extends Component {
    constructor()
    {
        super();

        this.emailRef=React.createRef();
        this.passRef=React.createRef();
    }


    handleChange=(event)=>{
    if(event.keyCode===13)
        {

      //  this.emailRef.current.focus();
        this.passRef.current.focus();

        //this.name.focus()


        }

    }

    
    render() {
        return (
            <div>

<div>
                <label>name:</label>
                <input  ref={(input)=>this.name=input} type="text"  onKeyDown={this.handleChange} name="name"/><br></br>


                <input type="text" name="email"  ref={this.emailRef}/>

                <input type="text" name="password"  ref={this.passRef}/>

                </div>
                <div><label>Age:</label>


                </div>
            </div>
            

              

           
        )
    }
}
