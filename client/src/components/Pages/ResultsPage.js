import React from "react"
import RpNav from "../RpNav/index"
import Map from "../Map/index"
import RpSearch from '../RpSearch'
import UserReview from '../UserReview/index'
import ResultCard from "../ResultCard"

 const ResultPage = (props) => {
  
    return(
      <div>
      <RpNav/>
      <RpSearch 
      {...props}
      />
      <Map/>
      <ResultCard/>
      <UserReview/>
      </div>
    )
    
}

export default ResultPage