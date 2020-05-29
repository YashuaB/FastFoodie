import React from "react"
import {Component} from "react"
import RpNav from "../RpNav/index"
import ProfileImage from "../ProfileImage/index"



class UserProfile extends Component{

  state = {

  }

  render () {
    return (
      <div>
      <RpNav/>
      <ProfileImage/>
     
      </div>
    )
  }
}

export default UserProfile