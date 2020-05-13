import React from "react"
import "./style.css"

const ReviewCard = () => {
  return(
    <div className="r-container">
      <h2 className="review-title">Recent Reviews</h2>
      <div className="review-card-body">
      <div className="rating">star rating</div>
        <h2 className="restaurant-name">Restaurant Name</h2>
        <img className="user-image" alt="user" src="https://via.placeholder.com/60x50.png"/>
          <img className="restaurant-image" alt="restaurant-image" src="https://via.placeholder.com/290x150.png"/>
          <h3 className="user-name">Rick Sanchez</h3>
          <p className="review-text-intro">Review writen on</p>
          <article className="user-review">
          <p className="user-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam eget ultrices mauris.
           Vestibulum efficitur mauris non augue placerat volutpat. 
           Curabitur id nulla a eros venenatis molestie in non urna.
            In in erat auctor, gravida ipsum sagittis, eleifend elit. Donec eu fermentum odio, vel hendrerit lorem.
             Nulla eget commodo felis.
           Vivamus non tellus egestas diam malesuada dapibus.
           </p>
          </article>
            
         
           
          <div>
           
          </div>
      </div>
        
    </div>
  )
}

export default ReviewCard