import React from "react"
import {Component} from "react"
import "./style.css"


// const getApi = require("/FastFoodie/server/routes/restaurant-api-routes.js")  
// import yelpAPI from "yelp-api"
import axios from "axios"
// import cors from "cors"
const dotenv = require("dotenv")
dotenv.config()

   

class SearchBar extends Component{

 state = {
  searchResults: null,
  address: "",
  zipcode: "",
  searchItem:"",
  placeIdData: null,
  image: null
 }
 


// handleSelect = async( value ) => {
  // let count = 0
  
    // for (let i = 0; i < 5;i++){
    //   count =+i
    // }
 
//   console.log(results)
// }
  // Getting the value and name of the input which triggered the change
  handleInputChange = (e) => {

    const {name , value} = e.target
  
  // Updating the input's state
    this.setState({
      [name]:value
    })
    console.log(value)
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

  this.setState({
    searchItem:this.state.searchItem,
    zipcode:this.state.zipcode
  })

  this.sendGetReq()
    
    
    
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
    
// console.log("test1", searchItem)

    // if(searchItem && searchZip){
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









///CORS/////////



//       const proxyurl = "https://cors-anywhere.herokuapp.com/"
//   let url = `http://api.yelp.com/v3/businesses/search?term=${searchItem}&location=${searchZip}`
//   axios.get(url,{
//     headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Authorization" :"Bearer" + "IVQX6I_VXWs1RTms3_zVU5UNhS50J5fvBjzwfUi9MPcl4oj-TfBkPrHOt1s1O8qGGvP4nknRgcQ90h-kwnOsnYsBGLDGGbulOawkwHboviotatAERl8xGvhSD74nXnYx",
//      }
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
//     }
  }

 async sendGetReq ()  {
  let zipcode = this.state.zipcode
  let searchItem = this.state.searchItem
  let apiKey = process.env.REACT_APP_API_KEY
  let longitude = 35.7596
  let latidude = 79.0193
  let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchItem}&inputtype=textquery&fields=photos,formatted_address,name,place_id,rating,opening_hours,geometry&key=${apiKey}`
  

  // const instance = axios.create({
  //   baseURL: `
  //   https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=taco&types=establishment&location=37.76999,-122.44696&radius=500&strictbounds&key=${apiKey}&libraries=places`,
  //   headers: {"Access-Control-Allow-Origin":"*"}
  // })
  

 await axios
  // .get(url[instance])
  .get(url)
  .then(res => {
     const data =  res.data
     this.setState({searchResults: data})
    
     console.log(data)
     this.setState({placeIdData:data.candidates[0].place_id})
  })
  .catch( error => {
    console.log(error)
  })

  let placeId = this.state.placeIdData
  let detailUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_phone_number,review,photo&key=${apiKey}`

  await axios
  // .get(url[instance])
  .get(detailUrl)
  .then(res => {

     const data = res.data
     console.log(data)
  })
  .catch( error => {
    console.log(error)
  })


  let apiKey2 = process.env.REACT_APP_API_KEY
    let pictureUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=${apiKey2}`
    axios
    // .get(url[instance])
    .get(pictureUrl, {responseType: "blob"})
    .then(res => {
       const data =  URL.createObjectURL(res.data) 
       this.setState({image:data})
      
       console.log(data)
       
    })
    .catch( error => {
      console.log(error)
    })
 }

 
 
  render(){
    
    return(
      <form className="form-body" onSubmit={this.handleFormSubmit}>
        <div className="search-field-container">
          <div className="item-field">
          <img src={this.state.image}/>
            <input 
            value={this.state.searchItem}
            className="main-searchbar" 
            name="searchItem"
            onChange={this.handleInputChange}
            type="text" 
            placeholder="Search..." />
          </div>
         
        <div className="zip-field">
          <input 
          value={this.state.zipcode}
          className="main-searchbar" 
          name="zipcode"
          onChange={this.handleInputChange}
          type="text" 
          placeholder="Zipcode..." />
        </div>
          <div>
          <img src={this.state.image}/>
          </div>
              <button className="search-food-btn ">Submit</button>
        </div>

      </form>
    
      
    )
  }
  
}


export default SearchBar