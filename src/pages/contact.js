import React from "react"
import { navigate } from "gatsby-link"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

// components
import Layout from "../components/layout"
// CSS
import contactStyles from "./contact.module.scss"
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
// Header
import Head from "../components/head"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactPage = ({ children, transitionStatus, entry, exit }) => {
  const [state, setState] = React.useState({})
  const [thank, setThank] = React.useState({ thank: false })

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    if (state.name && state.email && state.message) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...state,
        }),
      })
        // .then(() => navigate(form.getAttribute("action")))
        .then(() => {
          setState({ name: "", email: "", message: "" })
          setThank({ thank: true })
        })
        .catch(error => alert(error))
    }
  }

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


  const submitBtnVariants = {
    hidden: {
      opacity: 0,
      x: -150,
    },
    show: {
      opacity: 1,
      translateX: 0,
      x: 0,
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
      x: -150,
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
        return (
          <Layout>
            <Head title="Contact" />
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
                  <form
                    name="contact"
                    method="post"
                    data-netlify-honeypot="bot-field"
                    data-netlify="true"
                    action="/thanks/"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />{" "}
                    <label>
                      <input
                        onChange={handleChange}
                        value={state.name}
                        placeholder="Your name"
                        type="text"
                        name="name"
                        required
                        id="name"
                      />
                    </label>
                    <label>
                      <input
                        onChange={handleChange}
                        value={state.email}
                        placeholder="Your email"
                        required
                        type="email"
                        name="email"
                        id="email"
                      />
                    </label>
                    <label>
                      <textarea
                        onChange={handleChange}
                        value={state.message}
                        placeholder="Your message here..."
                        name="message"
                        id="message"
                        required
                        rows="5"
                        column="15"
                      />
                    </label>
                    <motion.button
                      initial="show"
                      variants={submitBtnVariants}
                      animate={thank.thank === true ? "exit" : "show"}
                      type="submit"
                    >
                      SEND MESSAGE
                    </motion.button>
                    <motion.button
                      initial="hidden"
                      variants={submitBtnVariants}
                      animate={thank.thank === true ? "show" : "exit"}
                      onClick={() => {
                        setThank({ thank: false })
                      }}
                      type="reset"
                    >
                      Thank You!
                    </motion.button>
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
