import React from "react"
import {Component} from "react"
import dotenv from "dotenv"
import "./style.css"
// const getApi = require("/FastFoodie/server/routes/restaurant-api-routes.js")  
// import yelpAPI from "yelp-api"
import axios from "axios"
// import cors from "cors"

dotenv.config()



class SearchBar extends Component{
 state = {
  searchResults: null,
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

    const searchItem = e.target.searchItem.value
    const searchZip = e.target.zipcode.value


    
 
// // Create a new yelpAPI object with your API key
// let apiKey = process.env.API_KEY;
// let yelp = new yelpAPI(apiKey);
 
// // Set any parameters, if applicable (see API documentation for allowed params)
// let paramsC = [{ 'term': searchItem}]
// let paramsZ = [{ location: searchZip }];
 
// // Call the endpoint
// yelp.query('businesses/search', paramsC, paramsZ)
// .then(data => {
//   // Success
//   console.log(data);
// })
// .catch(err => {
//   // Failure
//   console.log(err);
// });
    
console.log("test1", searchItem)

    if(searchItem && searchZip){
        // getApi(searchZip,searchItem)
      // var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/x-www-form-urlencoded", "Authorization" , "Bearer" + API_KEY);
      
      // var urlencoded = new URLSearchParams();
      
      // var requestOptions = {
      //   method: 'GET',
      //   headers: myHeaders,
        
      //   redirect: 'follow'
      // };
      
      // fetch(`https://api.yelp.com/v3/businesses/search?term=${searchItem}&location=${searchZip}`, requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));













      const proxyurl = "https://cors-anywhere.herokuapp.com/"
  let url = `http://api.yelp.com/v3/businesses/search?term=${searchItem}&location=${searchZip}`
  axios.get(url,{
    headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization" :"Bearer" + "IVQX6I_VXWs1RTms3_zVU5UNhS50J5fvBjzwfUi9MPcl4oj-TfBkPrHOt1s1O8qGGvP4nknRgcQ90h-kwnOsnYsBGLDGGbulOawkwHboviotatAERl8xGvhSD74nXnYx",
     }
})
      .then((res) =>{
        const restName = res.data.businesses[0].name
        console.log("test2")
        this.setState({
          searchResults: restName
        })
        console.log("test3")
        console.log(this.state.searchResults)
      })
    }
  }



  // Updating the input's state
  render(){
    return(
      <form className="form-body" onSubmit={this.searchQueryInput}>
        <div className="search-field-container">
          <div className="item-field">
            <input 
            value={this.state.searchItem}
            className="main-searchbar" 
            name="searchItem"
            type="text" 
            
            placeholder="Search..." />
          </div>
         
        <div className="zip-field">
          <input 
          value={this.state.zipcode}
          name="zipcode"
          type="text" 
          className="main-searchbar" 
          placeholder="Zipcode..." />
        </div>

              <button className="search-food-btn ">Submit</button>
        </div>

      </form>
    )
  }
  
}


export default SearchBar