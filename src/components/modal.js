import React, { useState } from "react"
import { Link } from "gatsby"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"
// CSS
import modalStyles from "./modal.module.scss"
import headerStyles from "./header.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

const Modal = props => {
  const containerVariants = {
    hidden: {
      display: "none",
      opacity: 1,
      x: 1200,
    },
    show: {
      display: "block",
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 1,
      x: -500,
      transition: {
        type: "spring",
        damping: 200,
        mass: 1,
      },
    },
  }

  return (
    <div className={modalStyles.first}>
      <motion.div
        initial="hidden"
        variants={containerVariants}
        animate={props.showModal === "show" ? "show" : "exit"}
        className={modalStyles.burger}
      >
        <div className={modalStyles.container}>
          <div className={modalStyles.close}>
            <FontAwesomeIcon
              onClick={props.toggleModal}
              icon={faTimes}
              size="2x"
            />
          </div>
          <ul>
            <li>
              <TransitionLink
                exit={{
                  length: 0.3,
                }}
                entry={{
                  delay: 0.3,
                }}
                to="/"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                About
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                exit={{
                  length: 0.3,
                }}
                entry={{
                  delay: 0.3,
                }}
                to="/blog"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Portfolio
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                exit={{
                  length: 0.3,
                }}
                entry={{
                  delay: 0.3,
                }}
                to="/contact"
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Contact
              </TransitionLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Modal
