import React from "react"
import {Component} from "react"
import "./style.css"



class SignUpButton extends Component{
    constructor(props){
      super(props)

      this.state = {
      hover: false,
      }
    }

  
    render(){
      return(
        <div className="sign-up-button" >
            <div class="dropdown">
              <a href="javascript:void(0)" className="dropbtn">Sign Up/ Login</a>
              <div class="dropdown-content">
                
                <form className="user-form" >
                <h2>Login</h2>
                  <div>
                  <label for="email">Email</label>
                          <input 
                          className="email"
                          type="text"
                          placeholder="Email"></input>
                          
                          <label for="password">Password</label>
                          <input className="password"
                          type="password"
                          placeholder="Password"></input>
                  </div>
                          
                        <div>
                        <button type="submit">Login</button>
                        <p>New Users Create an Account</p>
                        <a>Sign Up</a>
                        </div>
                          
                </form>
              </div>
          </div>
        
    </div>
      )
    }
}


export default SignUpButton

