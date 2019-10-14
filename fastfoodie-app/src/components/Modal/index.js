import React from "react"
import "./style.css"


const SearchBar = () => {
  return(
    <div>
      <input type="text" className="input" placeholder="Search..." />
    </div>
  )
}

const Modal = () => {
  return(
    <div>
      <div className="outer-container">
      <h1 className="modal-text">Hello I'm a Modal</h1>
     <SearchBar />
      </div>

      
    
    </div>
  )
}

export default Modal