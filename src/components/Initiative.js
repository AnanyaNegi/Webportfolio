import React from 'react'
import { Project, Words, Image, Row, Col, Link, Line } from "arwes"
import SocialMediaIcons from 'react-social-media-icons'

const Initiative = (props) => (
  <div style={{ padding: 20 }}>
    <Project
      animate
      header={props.title}
    >
      <Row>
        <Col s={12}>
          <Row nested noMargin>
            <Col s={12} l={4}>
              <Image animate resources={props.image_url}>
                {props.caption}
              </Image>
              { props.social &&
                <SocialMediaIcons
                  icons={props.social}
                  iconSize={'1.3em'}
                  iconColor={'#ffffff'}
                />
              }
            </Col>
            <Col s={12} l={8}>
              <p>
                <Words animate>
                  { props.body }
                </Words>
              </p>
              {props.link_text &&
                <Line animate />
              }
              {props.link_text &&
                <Link
                  className='success'
                  href={props.link_href}
                >
                  {props.link_text}
                </Link>
              }
            </Col>
          </Row>
        </Col>
      </Row>
    </Project>
  </div>
)

export default Initiative
