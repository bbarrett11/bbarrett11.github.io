import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import "../components/layoutManual.css"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <Project picture="gatsby-icon.png"/>
    <p>Other projects being added soon...</p>
  </Layout>
)

export default Projects
