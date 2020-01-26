import React from "react"
import "./style.css"


const Card = () => {
  return(
    <div>
      
      <h2>Restraunt Card</h2>
        <img>
        
        </img>
     
    </div>
  )
}

const RestrauntCard = () => {
  return(
    <div>
      <div className="outer-card-body">
          <div className="card-one"><Card/>
        </div>
          <div className="card-two"><Card/>
          </div>
        <div className="card-three"><Card/>
        </div>
        
      </div>
    </div>
  )
}

export default RestrauntCard