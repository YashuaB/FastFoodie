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
      <div className="user-form"  > 
        <div>
          <div>
          <input placeholder="Email"></input>
          </div> 
          <div>
          <input placeholder="Password"></input>
          </div>
          <div>
          <input placeholder="Password"></input>
          </div>
          <button>Login</button>
          <button>Button</button>

         
        </div>
      </div>
    )
  }
  
}

export default UserSignUp