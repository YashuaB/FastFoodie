import React from "react"
import {Component} from "react"
import RpNav from "../RpNav/index"
import RpSearch from '../RpSearch'
import ProfileImage from "../ProfileImage/index"
import ProfileReviews from "../ProfileReviews/index"
import ProfileFavorites from "../ProfileFavorite"



class UserProfile extends Component{

  state = {

  }

  render () {
    return (
      <div>
      <RpNav/>
      <RpSearch/>
      <ProfileImage/>
      <ProfileReviews/>
      <ProfileFavorites/>
      </div>
    )
  }
}

export default UserProfile