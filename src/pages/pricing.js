import React from "react"
import Calculator from "../components/Calculator"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import "../styles/calculator.scss"

import { Project } from 'arwes';


export default () => (
  <Layout>
    <Nav/>
    <div className="main">
      <Project
          animate
          header='How much does it cost?'
      >
        <Calculator />
      </Project>
    </div>
  </Layout>
)
