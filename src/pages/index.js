import React from "react"
import { Link } from "gatsby"

// components
import '../styles/index.scss'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm RP, a FrontEnd Dev living in MTL</h2>

      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
