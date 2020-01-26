import React from "react"
import {Component} from "react"
import axios from "axios"
import "./style.css"



class SignUpButton extends Component{
    constructor(props){
      super(props)

      this.state = {
       email: '',
       password: ''
      }
    }
      handleInputChange = event => {

        const {name , value} = event.target
        
        this.setState({
          [name]:value
        })
      }

      handleFormSubmit = event => {
        event.preventDefault()
        alert(`You've submit your email ${this.state.email}`)
        //axios call to the api user-login to create user from the data in submitted
        axios
        .post('http://localhost:8080/api/user-login',{
            email: this.state.email,
            password: this.state.password
        })//checking to see if the response came back from server that the user has been created
        .then(function(res){
          if(res.status === 200){
            console.log(this)
            //setting the state to the response data for the user email & password
            this.setState({
              email:res.data.email,
              password:res.data.password
            })
          }
        })

        this.setState({
          email: '',
          password: ''
        })
      }
    

  
    render(){
      return(
        <div className="sign-up-button" >
            <div className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">Sign Up/ Login</a>
              <div className="dropdown-content">
                
                <form className="user-form" >
                <h2>Login</h2>
                  <div>
                  <label htmlFor="email">Email</label>
                          <input 
                          className="email"
                          value={this.state.email}
                          name="email"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="Email"></input>
                          
                          <label htmlFor="password">Password</label>
                          <input 
                          className="password"
                          value={this.state.password}
                          name="password"
                          onChange={this.handleInputChange}
                          type="password"
                          placeholder="Password"></input>
                  </div>
                          
                        <div>
                        <button onClick={this.handleFormSubmit} className="login-button" type="submit">Login</button>
                        <p className="sign-in-text">Do you have an account</p>
                        <a className="sign-in-link" href="#">Sign Up</a>
                        </div>
                          
                </form>
              </div>
          </div>
        
    </div>
      )
    }
}


export default SignUpButton

