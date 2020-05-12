import React from "react"
import { Component } from "react"
import image from './image.json'
import "./style.css"



const CardContainer = (props) => {
  return(
    <div className="card">
        
   
      <div className="card-one">
        <h3 className="Restaurant Title"></h3>
        <p className="Restaurant Rating"></p>
        <a href={props.link}>
          <img alt={props.name} src={props.image}/>
         </a>
      </div>
  </div>
  )
}

class RestaurantCard extends Component {

  state = {
   image
  }


  render () {
    return(
      <div>
        <div className="outer-card-body">
        <h2 className="card-title">New Tasty Bites</h2>
        {this.state.image.map(img => (
          <CardContainer 
            name={img.name} 
            image={img.image}
            link={img.url}
            
            />) )}
          
        </div>
    </div>

    )
  }
  
}



export default RestaurantCard