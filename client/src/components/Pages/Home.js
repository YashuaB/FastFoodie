import React,{Component} from "react"
import Slider from "../Slider/index"
import RestruantCard from "../RestaurantCard/index"
import ReviewCard from "../ReviewCard/index"
import SignUpButton from "../SignUpButton/index"
import Navbar from "../Navbar/index"

class Home extends  Component {
  render(){
    return(
      <div>
      <Navbar/>
      <SignUpButton/>
      <Slider/>
      <RestruantCard/>
      <ReviewCard/>
      </div>
    )
  }
    
}




export default Home