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
                          <label for="email">Email</label>
                          <input 
                          placeholder="Email"></input>
                          
                          <label for="password">Password</label>
                          <input 
                          placeholder="Password"></input>
                        
                          <button>Login</button>
                          <p>New Users sign up</p>
                          <button>Sign Up</button>   
                </form>
              </div>
          </div>
        
    </div>
      )
    }
}


export default SignUpButton

