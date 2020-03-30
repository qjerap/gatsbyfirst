import React from "react"

// Components
import Header from "./header"
import Footer from "./footer"

// CSS
import '../styles/index.css'

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
