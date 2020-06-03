import React from "react"
import {Component} from "react"
import RpNav from "../RpNav/index"
import ProfileImage from "../ProfileImage/index"
import ProfileReviews from "../ProfileReviews/index"



class UserProfile extends Component{

  state = {

  }

  render () {
    return (
      <div>
      <RpNav/>
      <ProfileImage/>
      <ProfileReviews/>
      </div>
    )
  }
}

export default UserProfile