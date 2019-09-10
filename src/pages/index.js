import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GameOfLife from "../components/gameOfLife"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GameOfLife gWidth='11' gHeight='7'/>
    <div>
    Conway's Game of Life Demo. The initial oscillator is the <a href="http://www.conwaylife.com/wiki/Tumbler">Tumbler</a>
    </div>
  </Layout>
)

export default IndexPage
