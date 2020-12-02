import React from "react"
import {Component} from "react"
import {UserContent} from "../../App"
import  "./style.css"


const RpSearch = ({props}) =>{
 
   
    return (
     
      <form className="search-container" onSubmit={props.handleFormSubmit}>
        <div className="search-text">
        <input className="secondary-searchbar"
        value={this.props.searchItem}
        name="searchItem" 
        onChange={props.handleInputChange}
        type="text"
        placeholder="Search..."/>
        </div>

          <div className="search-zip">
          <input className="secondary-searchbar"
          value={props.zipcode}
          name="zipcode"
          onChange={props.handleInputChange} 
          type="text" 
          placeholder="Zipcode..."/>
          
              <button className="search-food-btn ">Submit</button>
        
          </div>
          
      </form>
    
    )
  }


export default RpSearch