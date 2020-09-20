import React from 'react'
import { Project, Words, Image, Row, Col, Link, Line, Header } from "arwes"
import SocialMediaIcons from 'react-social-media-icons'

const SideProject = (props) => (
  <div style={{ padding: 20 }}>

    <Project
      animate
      header={props.title}
    >
      <Row>
        <Col s={12}>
          <Row nested noMargin>
            <div style={{ padding: 10 }}>
                <Header animate>
                    <h3 style={{ margin: 0 }}>{props.author}</h3>
                </Header>
            </div>
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
              {props.link_text &&
                <Link
                  className='success'
                  href={props.link_href}
                >
                  {props.link_text}
                </Link>
              }

            </Col>
            <Col s={12} l={8}>
              <p>
                <Words animate>
                  { props.body }
                </Words>
              </p>
                <Line animate />
                { props.thumb_image_url &&
                <Image animate resources={props.thumb_image_url}></Image>
              }
            </Col>
          </Row>
        </Col>
      </Row>
    </Project>
  </div>
)

export default SideProject
