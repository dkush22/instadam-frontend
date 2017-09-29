import React from 'react'
import Photo from './Photo.js'

const PhotoList = (props) => {

  return (
    <div className="ui container">
      <div className="ui link cards">
      {props.photos.map((photo, index) => <Photo key={index} photo={photo} onClick={props.onClick} />)}
      </div>
    </div>
  )
}

export default PhotoList
