import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Initiative from "../components/Initiative"
import initiatives from "../data/initiatives"
import "../styles/initiatives.scss"

const initiativesArray = initiatives.map((initiative) => {
  return (
    <Initiative
      title={initiative.title}
      body={initiative.body}
      link_href={initiative.link_href}
      link_text={initiative.link_text}
      image_url={initiative.image_url}
      caption={initiative.caption}
      social={initiative.social}
      key={initiative.key}
    />
  )
})

export default () => (
  <Layout>
    <Nav />
    <div className="main-wrapper">
      <div id="initiatives" className="wrapper">
        <div>
          { initiativesArray }
        </div>
      </div>
    </div>
  </Layout>
)
