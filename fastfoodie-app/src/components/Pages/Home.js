import React,{Component} from "react"
import Slider from "../Slider/index"
import RestrauntCard from "../RestrauntCard/index"
import Review from "../Review/index"
import SignUp from "../SignUp/index"

class Home extends  Component {
  render(){
    return(
      <div>
      <SignUp/>
        <Slider/>
        <RestrauntCard/>
        <Review/>
      </div>
    )
  }
    
}




export default Home