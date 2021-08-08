import React, { Component } from 'react'
import PropTypes from 'prop-types'; // ES6


/// functional componnet 
const ChildData=(props)=>{
   return(
       <div>

<h1>Hello Child {props.name}</h1>
    <h1>Age {props.age}</h1>
    <h1>Age {props.status}</h1>
       </div>

   
   )

}


/// Protypes to the props of ChildData Component

ChildData.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,

    status:PropTypes.oneOfType([PropTypes.number,PropTypes.string,PropTypes.bool]),

    arrayOfMArks:PropTypes.arrayOf(PropTypes.number)




}


export default class Data extends Component {
    render() {
        return (
            <div>
                <ChildData name={"aditya"} age={22} status={true} arrayOfMArks={[1,2,3,true]} />
            </div>
        )
    }
}
