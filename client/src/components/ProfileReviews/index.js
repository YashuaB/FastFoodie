import React from "react"
import {Component} from "react"
import "./style.css"
import reviewedData from "./reviewed.json"

const Reviewed = (props) => {
    return (
      <div className="pr-reviews-detail">
        <div className="pr-res-name">{props.resName}</div>
        <div className="pr-review-date">Reviewed on: {props.date}</div>
        <div className="pr-res-rating">You rated: {props.resRating}</div>
        <a href={props.resLink}><img className="pr-res-image" alt={props.resAlt} src={props.resImage}/></a>
      </div>
    )
}

class ProfileReviews extends Component {
  
  state = {
    reviewedData
  }

  render () {
    return (
      <div>
        <div className="pr-reviews-container">
          <div className="pr-reviews-body">
            <h2 className="pr-title">Your Reviews</h2>
              <div className="underline"></div>
              {this.state.reviewedData.map( data => (
                <Reviewed
                resName={data.restaurantName}
                date={data.date}
                resRating={data.rating}
                resLink={data.restaurantUrl}
                resAlt={data.restaurantName}
                resImage={data.restaurantImage}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileReviews