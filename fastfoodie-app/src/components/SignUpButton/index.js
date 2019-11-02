import React from "react"
import {Component} from "react"
import UserSignUp from "../UserSignUp"
import "./style.css"



class SignUpButton extends Component{
    constructor(props){
      super(props)

      this.state = {
      hover: false,
      style: " ",
      }
    }

    displaySignUp = () => {
      this.setState({
      hover: true,
      })
    }

    hideSignUp = () => {
      this.setState({
        hover: false,
        })
    }

    render(){
      return(
        <div className="sign-up-button" onMouseOver={this.displaySignUp} onMouseLeave={this.hideSignUp}>
         <ul >
          <li  style={this.style}>Sign Up /Login</li>
       </ul>
       {this.state.hover ? <UserSignUp/> : null}
    </div>
      )
    }
}
// const SignUp = () => {
//   return(
//     <div>
//       <div className="sign-up-menu">Sign Up Menu</div>
//     </div>
//   )
// }

export default SignUpButton