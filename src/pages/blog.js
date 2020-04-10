import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

// components
import Layout from "../components/layout"
// CSS
import portfolioStyles from "./portfolio.module.scss"

const BlogPage = ({ children, transitionStatus, entry, exit }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            description
            techUsed
            publishedDate(formatString: "MMMM Do, YYYY")
            image {
              resize(width: 450) {
                src
              }
            }
          }
        }
      }
    }
  `)
  const blogs = data.allContentfulBlogPost.edges

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
              className={portfolioStyles.portfolio}
              initial="hidden"
              variants={containerVariants}
              animate={
                ["entering", "entered"].includes(transitionStatus)
                  ? "show"
                  : "exit"
              }
            >
              <h1 className={portfolioStyles.title}>My recent work</h1>
              <ol className={portfolioStyles.cards}>
                {blogs.map(blog => {
                  const {
                    title,
                    publishedDate,
                    slug,
                    description,
                    techUsed,
                  } = blog.node
                  const imgURL = blog.node.image.resize.src
                  return (
                    <li key={publishedDate}>
                      <div className={portfolioStyles.card}>
                        <TransitionLink
                          exit={{
                            length: 0.4,
                          }}
                          entry={{
                            delay: 0.4,
                          }}
                          to={`/blog/${slug}`}
                        >
                          <div className={portfolioStyles.cardImg}>
                            <img src={imgURL} alt="" />

                            <div className={portfolioStyles.tags}>
                              {techUsed.length > 0 &&
                                techUsed.map(tech => {
                                  return (
                                    <div className={portfolioStyles.tag}>
                                      {tech}
                                    </div>
                                  )
                                })}
                            </div>
                          </div>
                        </TransitionLink>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </motion.div>
          </Layout>
        )
      }}
    </TransitionState>
  )
}

export default BlogPage
