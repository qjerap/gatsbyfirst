import React from "react"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

// components
import Layout from "../components/layout"
// CSS
import contactStyles from "./contact.module.scss"
// ICONS
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const ContactPage = ({ children, transitionStatus, entry, exit }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      translateY: 0,

      y: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 5,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: 60,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.3,
      },
    },
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => {
        console.log(transitionStatus)
        return (
          <Layout>
            <motion.div
              initial="hidden"
              variants={containerVariants}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "show"
                  : "exit"
              }
            >
              <div className={contactStyles.contact}>
                <div className={contactStyles.titles}>
                  <h1 className={contactStyles.title}>Get in touch</h1>
                  <h1 className={contactStyles.title}>with me</h1>
                </div>

                <div className={contactStyles.innerGrid}>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field" />
                    <label>
                      <input
                        placeholder="Your name"
                        type="text"
                        name="name"
                        id="name"
                      />
                    </label>
                    <label>
                      <input
                        placeholder="Your email"
                        type="email"
                        name="email"
                        id="email"
                      />
                    </label>
                    <label>
                      <textarea
                        placeholder="Your message here..."
                        name="message"
                        id="message"
                        rows="5"
                        column="15"
                      />
                    </label>
                    <button type="submit">SEND MESSAGE</button>
                  </form>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                      <a href="#">Linkedin</a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                      <a href="#">Email</a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default ContactPage
