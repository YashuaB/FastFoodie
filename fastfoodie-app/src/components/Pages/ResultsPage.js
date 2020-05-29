import React from "react"
import{Component} from "react"
import RpNav from "../RpNav/index"
import Map from "../Map/index"
import RpSearch from '../RpSearch'
import UserReview from '../UserReview/index'
import ResultCard from "../ResultCard"

class ResultPage extends  Component {
  render(){
    return(
      <div>
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