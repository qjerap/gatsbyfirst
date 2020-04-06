import React from "react"


// Components
import Header from "./header"
import Footer from "./footer"

// CSS
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <>
    <div className={layoutStyles.container}>
    <Header />
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Layout
