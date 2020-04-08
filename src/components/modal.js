import React from "react"
import { Link } from "gatsby"
// CSS
import modalStyles from "./modal.module.scss"
import headerStyles from "./header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Modal = () => {
  return (
    <div className={modalStyles.burger}>
      <div className={modalStyles.container}>
        <div className={modalStyles.close}><FontAwesomeIcon icon={faTimes}  size="2x"/></div>
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
  )
}

export default Modal
