import React from "react"
import {Component} from "react"
import dotenv from "dotenv"
import yelpAPI from "yelp-api"
import axios from "axios"
// import cors from "cors"
import "./style.css"
dotenv.config()



class SearchBar extends Component{
 state = {

  searchResults: null
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

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded", "Authorization" , "Bearer" + API_KEY);
      
      var urlencoded = new URLSearchParams();
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
      };
      
      fetch(`https://api.yelp.com/v3/businesses/search?term=${searchItem}&location=${searchZip}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));














//   let url = `https://api.yelp.com/v3/businesses/search?term=${searchItem}&location=${searchZip}`
//   axios.get(url,{
//     headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Authorization" :"Bearer" + API_KEY,
//     'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
// })
//       .then((res) =>{
//         const restName = res.data.businesses[0].name
//         console.log("test2")
//         this.setState({
//           searchResults: restName
//         })
//         console.log("test3")
//         console.log(this.state.searchResults)
//       })
    }
  }



  // Updating the input's state
  render(){
    return(
      <form onSubmit={this.searchQueryInput}>
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

        <button>Submit</button>
        


      </form>
    )
  }
  
}


export default SearchBar