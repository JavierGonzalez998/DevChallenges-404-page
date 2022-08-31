import React from 'react'
import image from "../../../assets/Scarecrow.png"
import Styles from "./imageContainer.module.css";
const ImageContainer = () => {
  return (
    <div className={Styles.main}>
        <img src={image}/>
    </div>
  )
}

export default ImageContainer