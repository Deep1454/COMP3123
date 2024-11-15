import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
          super(props)
          this.state = {
            firstname: '',
            lastname:'',
            city:''
          }
          this.countries = ['Canada', 'USA', 'Mexico']
    }

    handleClick(e) {
        alert(`Hello World: ${e.target.name} - ${e.target.value}`)
    }
   
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
        console.log(this.state)
    }


    render () {
        return (
          <div>
            
              <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
             First Name:-  <input type='text' name='firstname' onChange={this.handleInput} value = {this.state.firstname} placeholder='Enter First 
             Name'></input> <br/>
             Last Name:-  <input type='text' name='lastname' onChange={this.handleInput} value = {this.state.lastname} placeholder='Enter Last Name'></input> <br />
             Country:- <select name='country' onChange={this.handleInput}>
                {
                    this.countries.map((cnm) => (
                         <option key ={cnm}>{cnm}</option>
                    ))
                }
             </select>
             City:- <select name = 'city' onChange={this.handleInput}>
                <option value='TOR'>Toronto</option>
                <option value='NYC'>New York</option>
                <option value='CAL'>California</option>
             </select>
             <input type='submit' value='Login' />
            </form>
              <button value='TEST' name='Deep' onClick={this.handleClick}>Submit</button>
              <p>{JSON.stringify(this.state)}</p>
          </div>
        )
    }

}

