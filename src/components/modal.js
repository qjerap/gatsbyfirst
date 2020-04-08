import React, { useState } from "react"
import { Link } from "gatsby"
// CSS
import modalStyles from "./modal.module.scss"
import headerStyles from "./header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

const Modal = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={modalStyles.first}>
      <div className={modalStyles.burgerIcon}>
        <FontAwesomeIcon onClick={toggleModal} icon={faBars} />
      </div>
      {showModal === true && (
        <div className={modalStyles.burger}>
          <div className={modalStyles.container}>
            <div className={modalStyles.close}>
              <FontAwesomeIcon onClick={toggleModal} icon={faTimes} size="2x" />
            </div>
            <ul>
              <li>
                <Link
                  to="/"
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={headerStyles.navItem}
                  activeClassName={headerStyles.activeNavItem}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
