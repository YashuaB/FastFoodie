import React from "react"
import {Component} from "react"
import "./style.css"


class ProfileReviews extends Component {
  
  state = {

  }

  render () {
    return (
      <div>
        <div className="pr-reviews-container">
          <div className="pr-reviews-body">
            <h2 className="pr-title">Your Reviews</h2>
              <span className="underline"></span>
          </div>
        </div>
      </div>
    )
  }
}