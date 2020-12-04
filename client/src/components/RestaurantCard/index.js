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
      <p className="restaurant-rating">{props.rating}</p>
      <a className="food-link" href={props.link}><h3 className="restaurant-title">{props.restaurantName}</h3></a>
       
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
        {this.state.resData.slice(0,2).map(data => (
          <CardContainer 
            name={data.restaurant} 
            image={data.image}
            link={data.url}
            restaurantName={data.restaurant}
            rating={data.rating}
           
            />) )}
          
        </div>
    </div>

    )
  }
  
}



export default RestaurantCard