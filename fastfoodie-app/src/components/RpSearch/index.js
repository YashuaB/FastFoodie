import React from "react"
import {Component} from "react"
import  "./style.css"

class RpSearch extends Component {
  state = {
    searchData: null
  }


  render () {
    return (
      <div className="search-container">
      <div className="search-text">
      <input className="secondary-searchbar" value="" name="searchItem" type="text" placeholder="Search..."></input>
      </div>
        <div className="search-zip">
        <input className="secondary-searchbar" value="" name="zipcode" type="text" placeholder="Zipcode..."></input>
        </div>
      </div>
    )
  }
}

export default RpSearch