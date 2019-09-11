import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout >
    <SEO title="About" />
    <div style={{padding:"1.3rem"}}>
      <h1>Benjamin Jackson Barrett</h1>
      <p>Hello! I'm a third year at the University of Virginia. Double majoring in Computer Science and Math. In addition to
        my majors, I love philosophy, playing music, and reading. 
        These passions have given me an insatiable curiosity, I am always asking "Why?".
        I'm always learning and trying to improve the answer to this question.
        I've discovered that my love for CS stems from a desire to build wonderful things.
        Over the past few years I've had some great opportunities
        and interned at some great companies doing software development work. 
        I've primarily done back end work in C#, C++, and Java.
        The biggest projects I've worked on are pipelines, for both testing and continuous deployment.
        Working on these complex procedures has allowed me to use a wide breadth of different technologies.  
        I'd love to work at a place where I can do great work and build wonderful things.     
      
      </p>
    </div>
  </Layout>
)

export default About
