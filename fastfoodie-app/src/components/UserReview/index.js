import React from "react"
import {Component} from "react"
import "./style.css"


class UserReview extends Component {

  state = {

  }

  
  render () {
    return (
      <div className="us-review-container">
        <div className="us-review-body">
        <textarea type="text" placeholder="your review"></textarea>
        </div>
      </div>
    )
  }
}

export default UserReview