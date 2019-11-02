import React from "react"
import {Component} from "react"
import "./style.css"



class  UserSignUp extends Component{
  constructor(props){
    super(props)

    this.state = {
      visible:true,
    }
  }

  

  

  render(){
    return(
      <div> 
        <form className="user-form" >
          <label for="email">Email</label>
          <input 
          placeholder="Email"></input>
          
          <label for="password">Email</label>
          <input 
          placeholder="Password"></input>
        
          <button>Login</button>
          <p>New Users sign up</p>
          <button>Sign Up</button>

         
        </form>
      </div>
    )
  }
  
}

export default UserSignUp