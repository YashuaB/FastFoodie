import React from "react"
import {Component} from "react"
import axios from "axios"
import "./style.css"



class SearchBar extends Component{
 state = {
  //  zipcode: "",
  //  searchItem:""
 }
  // Getting the value and name of the input which triggered the change
  // handleInputChange = (e) => {
    
  //   const {name, value} = event.target
  // // Updating the input's state
  //   this.setState({
  //     [name]:value
  //   })
  // }

  searchQueryInput = (e) => {
    e.preventDefault()

    const searchItem = e.target.elements.searchItem
    const searchZip = e.target.elements.zipcode

    if(searchItem && searchZip){
      axios.get(`https://api.yelp.com/v3/businesses/search?term=${searchItem}&location=${searchZip}`)
      .then((res) =>{
        const restName = res.data.businesses[0].name
      })
    }
  }
  // Updating the input's state
  render(){
    return(
      <div>
        <input 
        value={this.state.searchItem}
        name="searchItem"
        type="text" 
        className="main-searchbar" 
        placeholder="Search..." />

        <input 
        value={this.state.zipcode}
        name="zipcode"
        type="text" 
        className="main-searchbar" 
        placeholder="Zipcode..." />


        


      </div>
    )
  }
  
}


export default SearchBar