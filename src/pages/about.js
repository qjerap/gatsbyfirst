import React from "react"
import { Link } from "gatsby"

// components
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
    
      <h1>About.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, unde
        excepturi. Necessitatibus consequatur molestiae id nobis! Debitis
        architecto totam qui.
      </p>
      <Link to="/contact">Contact me!</Link>
  
    </Layout>
  )
}

export default AboutPage
