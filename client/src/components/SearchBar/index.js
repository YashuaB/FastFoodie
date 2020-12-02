import React from "react"
import {Component} from "react"
import "./style.css"


// const getApi = require("/FastFoodie/server/routes/restaurant-api-routes.js")  
// import yelpAPI from "yelp-api"
import axios from "axios"
// import cors from "cors"
const dotenv = require("dotenv")
dotenv.config()

   

const SearchBar = (props) =>{


    return(
      <form className="form-body" onSubmit={props.handleFormSubmit}>
        <div className="search-field-container">
          <div className="item-field">
          <img src={props.image}/>
            <input 
            value={props.searchItem}
            className="main-searchbar" 
            name="searchItem"
            onChange={props.handleInputChange}
            type="text" 
            placeholder="Search..." />
          </div>
         
        <div className="zip-field">
          <input 
          value={props.zipcode}
          className="main-searchbar" 
          name="zipcode"
          onChange={props.handleInputChange}
          type="text" 
          placeholder="Zipcode..." />
        </div>
              <button className="search-food-btn ">Submit</button>
        </div>

      </form>
    
      
    )
  }
  



export default SearchBar