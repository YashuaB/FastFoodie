import React from "react"
import {Component} from "react"
import "./style.css"

const Logo = () =>{
  return(
    <div>
    <h1 className="logo">FastFoodie</h1>
    </div>)
  }

const Header  = () =>{
  return(
    <div className="header">
      <Logo/>
      
    </div>
  )
}



export default Header

