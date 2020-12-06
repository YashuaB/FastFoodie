import React from "react"
import "./style.css"


   
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