import React, { Component } from 'react'
 // this component is created using class (this is not the best way to create the components as we have to write the extra code in it)
export default class Greetings extends Component {
    render(){
        return (
            <div style={{color:'blue' , backgroundColor : 'lightskyblue'}}><h1>Greetings, {this.props.name}</h1></div>
        )
    }
}