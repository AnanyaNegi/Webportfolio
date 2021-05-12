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
          <span className="a">H</span>
          <span className="a">i</span>
          <span className="a">T</span>
          <span className="a">h</span>
          <span className="b">e</span>
          <span className="c">r</span>
          <span className="c">e</span>
          <span className="c">,</span>
         </h1>

         </div>
         
         
          <h1>
            <Words animate className="container word">
              This is Ananya Negi.
            </Words>
         
         </h1>
         <Image animate resources='/profile.jpeg' id="profilepic" 
          style={{
          width:'10rem',
          height:'10rem',
        padding:'1.2rem',
        marginTop:'0',
        Position:'absolute',
         left:'7.7rem',
         bottom:'2.2rem',
       
        }}></Image>

        
  
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

         </div>
 
        </div>
      </div>
   
  </Layout>
)
