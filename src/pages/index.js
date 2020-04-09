import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"

// components
import "../styles/index.scss"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const [onLoadAnimation, setOnLoadAnimation] = useState(false)

  useEffect(() => {
    setOnLoadAnimation(!onLoadAnimation)
  }, [])

  const homeAnimation = {
    active: { transform: "translateX(1rem)", opacity: 1 },
  }

  const homeTransition = {
    duration: 0.4,
  }

  return (
    <Layout>
      <motion.div
        variants={homeAnimation}
        transition={homeTransition}
        animate={onLoadAnimation && "active"}
        className={indexStyles.home}
      >
        <h2>Hello!</h2>
        <h1>
          <span className={indexStyles.linebreak}>I'm Romain Pareja,</span> a{" "}
          <span className={indexStyles.headAccent}>Frontend</span> developer.
        </h1>

        <div className={indexStyles.info}>
          <p>
            I am an experience freelance graphic designer based in Nwy York,
            USA. I have worked in the creative industry for over fifteen years,
            starting out in publishing (working on magazines and newspapers )
            before moving into design agency work.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
            ratione deserunt. Unde fugit corrupti distinctio. Cum quas ipsam
            tempora at!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            dignissimos quam deleniti quia, quae impedit eius consectetur
            tenetur cum aperiam. If you want to know more about my works or
            myself, feel free to check my{" "}
            <TransitionLink
              exit={{
                length: 0.4,
              }}
              entry={{
                delay: 0.4,
              }}
              to="/blog"
            >
              portfolio
            </TransitionLink>{" "}
            and to{" "}
            <TransitionLink
              exit={{
                length: 0.4,
              }}
              entry={{
                delay: 0.4,
              }}
              to="/contact"
            >
              contact
            </TransitionLink>{" "}
            me!
          </p>
        </div>
      </motion.div>
    </Layout>
  )
}
export default IndexPage
