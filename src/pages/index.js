import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GameOfLife from "../components/gameOfLife"

const IndexPage = () => (
  <Layout>
    <div style={{padding:"1.3rem"}}>
      <SEO title="Home" />
      <GameOfLife gWidth='11' gHeight='7'/>
      <div style={{padding:"1.3rem"}}>
      Conway's Game of Life Demo. The initial oscillator is the <a href="http://www.conwaylife.com/wiki/Tumbler">Tumbler</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
