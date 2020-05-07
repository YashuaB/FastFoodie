import React from "react"
import { Component } from "react"
import image from './image.json'
import "./style.css"

// var img = [{
     
//   url: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
//   name: "hamburger"
// },{

//   url: "./images/burger.jpg",
//   name: "nacho"
// },{

//   url: "./images/burger.jpg",
//   name: "food"
// }]

const CardContainer = (props) => {
  return(
    <div>
        
    <h2>Restraunt Card</h2>
      
        <a href={props.link}>
          <img alt={props.name} src={props.image}/>
         </a>
       
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
          link={img.image}
          
          />
         
      ) )}
        
      </div>
    </div>

    )
  }
  
}



export default RestruantCard