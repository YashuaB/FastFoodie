import React from "react"
import "./style.css"

const Review = () => {
  return(
    <div className="r-container">
      <h2>Daily Reviews</h2>
      <div className="review-card-body">
        <h2>Review Card Title</h2>
          <image>
            image of restraunt
          </image>
            <div>star rating</div>
          <div>
           <p>review text</p>
          </div>
      </div>
        
    </div>
  )
}

export default Review