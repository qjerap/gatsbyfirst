import React, {useState} from "react"

// Components
import Header from "./header"
import Footer from "./footer"
import Modal from "./modal"

// CSS
import layoutStyles from "./layout.module.scss"


const Layout = props => {

  const [showModal, setShowModal] = useState(true)


  
  return (
    <>
        <Modal />
        <div className={layoutStyles.container}>
          <Header />
          <div className={layoutStyles.content}>{props.children}</div>
          <Footer />
        </div>
    </>
  )
}

export default Layout
