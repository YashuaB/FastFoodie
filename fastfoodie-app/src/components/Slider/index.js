import React from "react"
import {Component} from "react"
import "./style.css"


const SearchBar = () => {
  return(
    <div>
      <input type="text" className="main-searchbar" placeholder="Search..." />
    </div>
  )
}

const Slider = () => {
  return(
    <div className="outer-container">
      
    <h1 className="slider-text">Hello I'm a Modal</h1>
      <Carousel/>
     <SearchBar />
      </div>

      
    
    
  )
}


class Carousel extends Component{
  constructor(props){
    super(props)

    this.state = {
      images: [ 
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ]
      ,currentIndex:0
    }
  }

  componentDidMount(){
    this.changeSlide()
  }
 
  changeSlide = () =>{
    // if  current index is less than or equal to 0 change image index plus 1 then set the state to that index
    // at set interval of 2 seconds
    if(this.state.currentIndex === this.state.images.length -1 ){
      return this.setState ({
        currentIndex: 0,
      })
    } 

    this.setState( prevState => ({
     currentIndex: prevState.currentIndex + 1
    
     }))
  }
  // setSlideState = () =>{
  //   this.setState( prevState => ({
  //     currentIndex: prevState.currentIndex + 3
     
  //     }))
  // }

  slideTransition = () =>{
    setTimeout(()=>{
      this.changeSlide()
    },1000)
  }

  render() {
    return (
      <div>
    <img className="gallery-images" alt="" src={this.state.images[this.state.currentIndex]}/>
       
      </div>
    )
  }
}

// {this.state.images.map((image,i) => (
//   <Slide key={i} image={image} />
// ))
// }

// const Slide = (props) =>{
//  return (
//   <div className="slide">
//   <img alt={props.name} src={props.image}/>
//   </div>
//  )
// }

export default Slider