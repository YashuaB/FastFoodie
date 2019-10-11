import React,{Component} from "react"
import Modal from "../Modal/index"
import RestrauntCard from "../RestrauntCard/index"
import Review from "../Review/index"
import SignUp from "../SignUp/index"

class Home extends  Component {
  render(){
    return(
      <div>
      <SignUp/>
        <Modal/>
        <RestrauntCard/>
        <RestrauntCard/>
        <RestrauntCard/>
        <Review/>
      </div>
    )
  }
    
}




export default Home