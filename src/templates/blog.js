import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

// components
import Layout from "../components/layout"
// CSS
import projectStyles from "./blog.module.scss"
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faEye,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons"
// Header
import Head from "../components/head"


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      techUsed
      gitCode
      liveUrl
      publishedDate(formatString: "MMMM, YYYY")
      image {
        resize(width: 800) {
          src
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = (props, { children, transitionStatus, entry, exit }) => {
  const {
    title,
    publishedDate,
    techUsed,
    gitCode,
    liveUrl,
  } = props.data.contentfulBlogPost
  const imgURL = props.data.contentfulBlogPost.image.resize.src

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
      },
    },
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -60,
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
      y: -60,
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
          <Head title={title}/>
            <motion.div
              initial="hidden"
              variants={containerVariants}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "show"
                  : "exit"
              }
            >
              <div className={projectStyles.grid}>
                <div className={projectStyles.thumbnail}>
                  <img src={imgURL} alt="" />{" "}
                  <div className={projectStyles.tech}>
                    <ul className={projectStyles.tags}>
                      {techUsed.length > 0 &&
                        techUsed.map(tech => {
                          return <li className={projectStyles.tag}>{tech}</li>
                        })}
                    </ul>
                  </div>
                </div>

                <div className={projectStyles.description}>
                  <div className={projectStyles.titleAndDate}>
                    <h1 className={projectStyles.title}>{title}</h1>
                    <p className={projectStyles.date}>{publishedDate}</p>
                  </div>

                  {documentToReactComponents(
                    props.data.contentfulBlogPost.body.json,
                    options
                  )}


                  <ul className={projectStyles.links}>
                    <li>
                      <TransitionLink
                        exit={{
                          length: 0.4,
                        }}
                        entry={{
                          delay: 0.4,
                        }}
                        to="/blog"
                      >
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                      </TransitionLink>
                    </li>
                    <li>
                      <a href={gitCode} target="_blank">
                        {" "}
                        <FontAwesomeIcon icon={faCode} />
                      </a>
                    </li>
                    <li>
                      <a href={liveUrl} target="_blank">
                        {" "}
                        <FontAwesomeIcon icon={faEye} />
                      </a>
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

export default Blog
