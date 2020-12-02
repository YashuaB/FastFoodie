import React from "react"
import Slider from "../Slider/index"
import RestruantCard from "../RestaurantCard/index"
import ReviewCard from "../ReviewCard/index"
import SignUpButton from "../SignUpButton/index"
import Navbar from "../Navbar/index"


const Home = (props) =>  {
  
    return(
      <div>
      <Navbar/>
      <SignUpButton/>
      <Slider 
      {...props} />
      <RestruantCard/>
      <ReviewCard/>
      </div>
    )
  }
    
export default Home