import React from 'react'
import Styles from './layout.module.css'
import Title from './title/title'
import ImageContainer from './imageContainer/ImageContainer'
import Subtitle from './subtitle/Subtitle'
import Button from './button/Button'
import Footer from './footer/Footer'

const Layout = () => {
  const actionButton = () => {
    alert("Going to homepage");
  }
  return (
    <>
      <div className={Styles.main}>
        <ImageContainer />
        <div className={Styles.container}>
          <Title />
          <Subtitle />
          <div className={Styles.btnContainer}>
            <Button variant="contained" func={actionButton}>Back to homepage</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Layout