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
        <div className="user-details">
          <img className="user-details-img" src="https://via.placeholder.com/60x60.png"/>
          <p className="user-detail-name">Morty S.</p>
          <p className="star-rating">Star Rating</p>
        </div>
        <p className="sub-title">Write your review</p>
        <textarea className="user-text-a" type="text" placeholder="your review"></textarea>
        </div>
      </div>
    )
  }
}

export default UserReview