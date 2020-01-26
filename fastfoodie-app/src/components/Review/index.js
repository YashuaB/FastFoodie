import React from "react"
import "./style.css"

const Review = () => {
  return(
    <div className="r-container">
      <h2 className="review-title">Recent Reviews</h2>
      <div className="review-card-body">
        <h2>Review Card Title</h2>
          <img/>
            image of restraunt
         
            <div>star rating</div>
          <div>
           <p>review text</p>
          </div>
      </div>
        
    </div>
  )
}

export default Review