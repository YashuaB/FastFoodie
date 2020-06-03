import React, { Component } from "react"
import "./style.css"
import  reviewData from "./user-review.json"

const Review = (props) => {
  return(
    <div className="review-card-body">
    <div className="rating">{props.rating}</div>
      <h2 className="restaurant-name">{props.restaurantName}</h2>
      <a href={props.userLink}><img className="user-image" alt={props.nameUser} src={props.imageUser}/></a>
        <a href={props.restaurantLink}><img className="restaurant-image" alt={props.restaurantAlt} src={props.restaurantImage}/></a>
        <h3 className="user-name">{props.user}</h3>
        <p className="review-text-intro">Review writen on:</p>
        <article className="user-review">
        <p className="user-text">{props.text}</p>
        </article>
      
    </div>
  )
}

class ReviewCard extends Component {

    state = {
      reviewData
    }

  render () {
    return(
      <div className="r-container">
      <h2 className="review-title">Recent Reviews</h2>
      {this.state.reviewData.map(data => (
        <Review
          rating={data.rating}
          restaurantName={data.restaurantName}
          userLink={data.profileUrl}
          nameUser={data.username}
          imageUser={data.userImage}
          restaurantLink={data.restaurantUrl}
          restaurantAlt={data.restaurantName}
          restaurantImage={data.restaurantImage}
          user={data.username}
          text={data.userReview}
        />
      ))}
     
        
    </div>
      )
  }
  
}

export default ReviewCard

