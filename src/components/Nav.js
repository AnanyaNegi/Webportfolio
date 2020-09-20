import React from "react"
import { Header, Image } from "arwes"
import { Link } from "gatsby"

export default () => (
  <div className="header-wrapper">
    <div>
      <Header animate>
        <div className="header-inner">
          <ul className="nav">
              <Link to="/">
                <Image resources='/logo.png' Frame="nil" className="logo"></Image>
              </Link>
          </ul>
          <ul className="nav">
                     <li><Link to="/side_projects/">Projects</Link></li>

            <li><Link to="/initiatives/">Initiatives</Link></li>
          </ul>
        </div>
      </Header>
    </div>
  </div>
)
