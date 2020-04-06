import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

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
          I'm Romain Pareja, a{" "}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            nesciunt porro aspernatur doloribus id alias, quisquam, nobis, fugit
            corrupti omnis pariatur unde eaque aperiam maxime reprehenderit
            labore quos deserunt minima!
          </p>
        </div>
      </motion.div>
    </Layout>
  )
}
export default IndexPage
