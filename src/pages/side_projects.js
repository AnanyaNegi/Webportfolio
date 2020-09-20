import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import SideProject from "../components/SideProject"
import side_projects from "../data/projects"
import { Appear } from 'arwes'
import "../styles/side-projects.scss"

const projectsArray = side_projects.map((project) => {
  return (
    <SideProject
      title={project.title}
      body={project.body}
      link_href={project.link_href}
      link_text={project.link_text}
      image_url={project.image_url}
      thumb_image_url={project.thumb_image_url}
      caption={project.caption}
      social={project.social}
      author={project.author}
      key={project.key}
    />
  )
})

export default () => (
  <Layout>
    <Nav />
    <div className="main-wrapper">
      <div id="side-projects" className="wrapper">
        <Appear animate>
          <p>A collection of some projects I have worked on.Check out the github repo for further information.</p>
        </Appear>
      </div>
      <div id="side-projects" className="wrapper">
        <div>
          { projectsArray }
        </div>
      </div>
    </div>
  </Layout>
)
