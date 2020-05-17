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
      <input value="" name="searchItem" type="text" placeholder="Search..."></input>
      </div>
        <div className="search-zip">
        <input value="" name="zipcode" type="text" placeholder="Zipcode..."></input>
        </div>
      </div>
    )
  }
}

export default RpSearch