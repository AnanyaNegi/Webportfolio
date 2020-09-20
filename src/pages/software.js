import React from "react"

import Layout from "../components/Layout"
import Nav from "../components/Nav"
import { Image, Heading, Paragraph, Link } from "arwes"

export default () => (
  <Layout>
    <Nav />
    <div className="main-wrapper">
      <div className="wrapper">
        <div style={{ margin: '0 auto', padding: 20, maxWidth: 1100 }}>
          <Heading node='h1'>Consonance: futuristic publishing management software</Heading>
          <Paragraph>
            <Link
              className='success'
              href="https://consonance.app"
            >
              Read all about our flagship comprehensive publishing software on the Consonance website >
            </Link>
            </Paragraph>

          <Image animate resources='/consonance.png'></Image>
        </div>
      </div>
    </div>
  </Layout>
)
