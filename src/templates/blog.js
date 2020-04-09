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

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM, YYYY")
      image {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = (props, { children, transitionStatus, entry, exit }) => {
  const { title, publishedDate } = props.data.contentfulBlogPost
  const imgURL = props.data.contentfulBlogPost.image.file.url

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node.data.target)
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
              <div className={projectStyles.grid}>
                <div className={projectStyles.thumbnail}>
                  <img src={imgURL} alt="" />{" "}
                  <div className={projectStyles.tech}>
                    <ul className={projectStyles.tags}>
                      <li className={projectStyles.tag}>react</li>
                      <li className={projectStyles.tag}>css</li>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, enim facere. Libero aliquid tenetur iste et neque
                    quo dolorem autem sunt itaque quod perspiciatis facilis
                    tempore maiores nihil illum, ipsam molestias, earum
                    sapiente! Suscipit doloribus iure, deserunt optio molestias
                    inventore reiciendis, placeat vitae culpa itaque distinctio
                    rem saepe est reprehenderit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    vitae. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Dolorem quidem natus nemo, similique dolorum quibusdam
                    unde omnis adipisci praesentium facilis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum cumque fugit corrupti unde cupiditate provident itaque
                    eum repellat, sint eos ipsum numquam minima temporibus ad
                    illum velit ea totam vero perspiciatis molestias veniam
                    aliquid atque omnis? Impedit sequi adipisci molestiae!
                  </p>

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
                      <FontAwesomeIcon icon={faCode} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEye} />
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
