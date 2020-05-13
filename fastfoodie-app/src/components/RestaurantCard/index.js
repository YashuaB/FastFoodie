import React from "react"
import { Component } from "react"
import resData from './res-card-data.json'
import "./style.css"



const CardContainer = (props) => {
  return(
    <div className="card">
      <div className="card-one">
        <a href={props.link}>
          <img  className="food-image" alt={props.name} src={props.image}/>
         </a>
      </div>
      <h3 className="restaurant-Title">{props.restaurantName}</h3>
        <p className="restaurant-rating">{props.rating}</p>
  </div>
  )
}

class RestaurantCard extends Component {

  state = {
   resData
  }


  render () {
    return(
      <div>
        <div className="restaurantCard-container">
        <h2 className="title">New Tasty Bites</h2>
        {this.state.resData.map(data => (
          <CardContainer 
            name={data.name} 
            image={data.image}
            link={data.url}
            
            />) )}
          
        </div>
    </div>

    )
  }
  
}



export default RestaurantCard