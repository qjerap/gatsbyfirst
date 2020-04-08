import React, {useState} from "react"

// Components
import Header from "./header"
import Footer from "./footer"
import Modal from "./modal"

// CSS
import layoutStyles from "./layout.module.scss"


const Layout = props => {

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }


  
  return (
    <>
        <Modal  toggleModal={toggleModal} showModal={showModal}/>
        <div className={layoutStyles.container}>
          <Header toggleModal={toggleModal}/>
          <div className={layoutStyles.content}>{props.children}</div>
          <Footer />
        </div>
    </>
  )
}

export default Layout
