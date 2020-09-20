import React from "react"
import { Words, Button, Paragraph,} from 'arwes'
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../styles/home.scss"
import { Header, Image } from "arwes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaGithub,FaLinkedin,FaMedium,FaEnvelope } from "react-icons/fa";


export default () => (
  <Layout>
    <div className="main-wrapper">
      <div id="home" className="wrapper">
        <div className="container">
          <div className="glitch">
         
          <h1 className="top"> 
          <span className="a">A</span>
          <span className="a">N</span>
          <span className="a">A</span>
          <span className="a">N</span>
          <span className="b">Y</span>
          <span className="c">A</span>
          </h1>
         </div>

         <Image animate resources='/profile.png' className="profilepic"
          style={{
          width:'150px',
          height:'160px',
          position:'relative',
          marginBottom:'4.2rem',
          marginTop:'0',
          left:'6.6rem',
        
        }}></Image>

          <h1>
            <Words animate>
              Web/App Developer
            </Words>
          </h1>
  
<div style={{marginBottom:'0.5rem',}}>
<a href="https://github.com/AnanyaNegi"><FaGithub className="fafa"/></a>
 <a href="https://www.linkedin.com/in/ananya-negi-42922018a/"><FaLinkedin className="fafa"/></a>
 <a href="https://medium.com/@ananya4negi"><FaMedium className="fafa"/></a>
 <a href="https://ananya4negi@gmail.com"><FaEnvelope className="fafa"/></a>
</div>

          <Button layer="primary" animate>
            <Link to="/side_projects/">Projects</Link>
          </Button>
          { " " }

          
          <Button layer="primary" animate>
            <Link to="/initiatives/">Initiatives</Link>
          </Button>

           
          <Paragraph/>


        </div>
      </div>
    </div>
  </Layout>
)
