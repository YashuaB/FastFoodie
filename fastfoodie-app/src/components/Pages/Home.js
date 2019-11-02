import React,{Component} from "react"
import Slider from "../Slider/index"
import RestrauntCard from "../RestrauntCard/index"
import Review from "../Review/index"
import SignUpButton from "../SignUpButton/index"

class Home extends  Component {
  render(){
    return(
      <div>
      <SignUpButton/>
        <Slider/>
        <RestrauntCard/>
        <Review/>
      </div>
    )
  }
    
}




export default Home