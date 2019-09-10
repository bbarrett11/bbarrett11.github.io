import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import "../components/layoutManual.css"

const Projects = () => (
  <Layout>
    <div style={{padding:"1.3rem"}}>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <Project picture="gatsby-icon.png"/>
      <p>Other projects being added soon...</p>
    </div>
  </Layout>
)

export default Projects
