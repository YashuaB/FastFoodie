import React,{Component} from "react"
import Slider from "../Slider/index"
import RestruantCard from "../RestaurantCard/index"
import Review from "../Review/index"
import SignUpButton from "../SignUpButton/index"


class Home extends  Component {
  render(){
    return(
      <div>
      <SignUpButton/>
        <Slider/>
          <RestruantCard/>
        <Review/>
      </div>
    )
  }
    
}




export default Home