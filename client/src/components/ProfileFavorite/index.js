import React from "react"
import {Component} from "react"
import "./style.css"
import favData from "./favorite.json"

const Favorites = (props) => {
    return (
      <div className="pr-fav-detail">
        <div className="fav-res-name">{props.resName}</div>
        <div className="fav-res-rating">Rated: {props.resRating}</div>
        <a href={props.resLink}><img className="fav-res-image" alt={props.resAlt} src={props.resImage}/></a>
      </div>
    )
}

class ProfileFavorites extends Component {
  
  state = {
    favData
  }

  render () {
    return (
      <div>
        <div className="pr-fav-container">
          <div className="pr-fav-body">
            <h2 className="fav-title">Your Favorites</h2>
              <div className="fav-underline"></div>
              {this.state.favData.map( data => (
                <Favorites
                resName={data.restaurantName}
                resRating={data.rating}
                resLink={data.restaurantUrl}
                resAlt={data.restaurantName}
                resImage={data.restaurantImage}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileFavorites