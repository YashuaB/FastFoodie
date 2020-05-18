import React from "react"
import {Component} from "react"
import "./style.css"


const Card = () =>{
  return (
    <div className="result-container">
      <h2 className="rs-title"></h2>
      <div className="result-body">
        <img alt="restaurant" src="https://via.placeholder.com/150x100.png"/>
        <div className="result-text-body">
        <h2 className="rs-restaurant-name">Restaurant Name</h2>
        <p className="rs-restaurant-info">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <p className="rs-restaurant-address">Restaurant Address</p>
        </div>
      </div>
    </div>
  )
}

class ResultCard extends Component {

    state = {
      restaurantData: null;
    }

    render () {
      return (
        <div>
        <Card/>
        </div>
      )
    }
}

export default ResultCard
