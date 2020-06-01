import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"

// components
import Layout from "../components/layout"
// CSS
import "../styles/index.scss"
import indexStyles from "./index.module.scss"
// Head
import Head from "../components/head"

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
        return (
          <Layout>
            <Head title="Home" />
            <motion.div
              initial="hidden"
              variants={containerVariants}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "show"
                  : "exit"
              }
              className={indexStyles.home}
            >
              <h2>Hello!</h2>
              <h1>
                <span className={indexStyles.linebreak}>
                  I'm Romain Pareja,
                </span>{" "}
                a <span className={indexStyles.headAccent}>Frontend</span>{" "}
                developer.
              </h1>

              <div className={indexStyles.info}>
                <p>
                  I am a self-taugh developer. I love to challenge myself
                  everyday and learn new skills. I have a baccalaureat in
                  Geography and a master in Tourism Management. My university
                  background taught me a lot about methodology, soft skills and
                  and group work.
                </p>
                <p>
                  {" "}
                  Additionally I have allways been passionated with computers and
                  the Internet. For the last 18 months web developement has been my
                  routine. I'm hardworking, perfectionist, determined and imaginative.
                </p>
                <p>
                  If you want to know more about my work or myself, feel free
                  to take a look at my{" "}
                  <TransitionLink
                    exit={{
                      length: 0.4,
                    }}
                    entry={{
                      delay: 0.4,
                    }}
                    to="/portfolio"
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
      }}
    </TransitionState>
  )
}
export default IndexPage
