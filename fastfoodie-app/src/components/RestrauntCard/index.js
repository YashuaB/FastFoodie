import React from "react"
import { Component } from "react"
import image from './image.json'
import "./style.css"



const CardContainer = (props) => {
  return(
    <div className="card">
        
    <h2 className="card-title">Restraunt Card</h2>
      <div className="card-one">
        <a href={props.link}>
          <img alt={props.name} src={props.image}/>
         </a>
      </div>
  </div>
  )
}

class RestruantCard extends Component {

  state = {
   image
  }


  render () {
    return(
      <div>
        <div className="outer-card-body">
        {this.state.image.map(img => (
          <CardContainer 
            name={img.name} 
            image={img.image}
            link={img.url}
            
            />
          
        ) )}
          
        </div>
    </div>

    )
  }
  
}



export default RestruantCard