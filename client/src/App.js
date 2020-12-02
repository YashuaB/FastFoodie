import React from 'react'
import {Component} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from '../src/components/Pages/Home'
import Header from '../src/components/Header/index'
import Footer from '../src/components/Footer/index'
import UserProfile from '../src/components/Pages/UserProfile'
import Wrapper from './components/Wrapper'
import ResultPage from './components/Pages/ResultsPage'
import './App.css'
import axios from "axios"

const dotenv = require("dotenv")
dotenv.config()

// export const UserContent = React.createContext()

class App extends Component {

  state = {
      searchResults: null,
      address: "",
      zipcode: "",
      searchItem:"",
      placeIdData: null,
      image: null,
      imgResultWidth: "",
      imgResultHeight: "",
      imgResultHtmlAttr: "",
      imgResultRef: ""
  }

 
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
  }

 async sendGetReq ()  {

  let zipcode = this.state.zipcode
  let searchItem = this.state.searchItem
  let apiKey = process.env.REACT_APP_API_KEY
  let longitude = 35.7596
  let latidude = 79.0193
  let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchItem}&inputtype=textquery&fields=photos,formatted_address,name,place_id,rating,opening_hours,geometry&key=${apiKey}`
  
  

 await axios

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
  .get(detailUrl)
  .then(res => {

     const data = res.data
     this.setState({
      imgResultWidth: data.result.photos[0].width ,
      imgResultHeight: data.result.photos[0].height,
      imgResultHtmlAttr: data.result.photos[0].html_attributions,
      imgResultRef: data.result.photos[0].photo_reference
     })
     console.log(data.result.photos[0].photo_reference)
  })
  .catch( error => {
    console.log(error)
  })


  
  let resWidth = this.state.imgResultWidth
  let resHeight = this.state.imgResultHeight
  let resRef = this.state.imgResultRef
  // let resAttr = this.state.imgResultHtmlAttr
  
    let pictureUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=${resWidth}&maxHeight${resHeight}&photoreference=${resRef}&key=${apiKey}`

     axios
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

 

 render() {
   
  return (
    <BrowserRouter>
    <Switch>
      <Wrapper>
        <Header />
          <Route 
          exact path="/"  
          render={props => (
            <Home {...props} 
            handleInputChange={this.handleInputChange.bind(this)}
             handleFormSubmit={this.handleFormSubmit.bind(this)}
             image={this.state.image}
             zipcode={this.state.zipcode}
             searchItem={this.state.searchItem}
             searchResults={this.state.searchResults}/>
             )}
          />
          <Route exact path="/result-page" render={props => (
            <ResultPage {...props}
            handleInputChange={this.handleInputChange.bind(this)}
            handleFormSubmit={this.handleFormSubmit.bind(this)}
            image={this.state.image}
             zipcode={this.state.zipcode}
             searchItem={this.state.searchItem}
             searchResults={this.state.searchResults}/>
              )}/>
          <Route path="/user-page" exact component ={UserProfile}/>
        <Footer />
      </Wrapper>
    </Switch>
    </BrowserRouter>
   
    )
}
}
export default App


