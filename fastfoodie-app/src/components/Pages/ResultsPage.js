import React from "react"
import{Component} from "react"
import Header from "../Header/index"
import RpNav from "../RpNav/index"
import Map from "../Map/index"
import RpSearch from '../RpSearch'
import UserReview from '../UserReview/index'
import ResultCard from "../ResultCard"

class ResultPage extends  Component {
  render(){
    return(
      <div>
      <Header/>
      <RpNav/>
      <RpSearch/>
      <Map/>
      <ResultCard/>
      <UserReview/>
      </div>
    )
  }
    
}




export default ResultPage