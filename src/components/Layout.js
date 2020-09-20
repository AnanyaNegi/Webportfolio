import React from "react"
import { ThemeProvider, createTheme, Arwes, Footer, SoundsProvider, createSounds } from 'arwes'

const genproTheme = {
  color: {
    primary: {
      base: '#C0BBB6',
      dark: '#fa2d74',
      light: '#E4CFFF'
    },
    header: {
      base: '#FCFAF8',
      dark: '#4A4541',
      light: '#F5F2EF',
    }
  }
}

const mySounds = {
  shared: { volume: 1 },  // Shared sound settings
  players: {  // The player settings
    click: {  // With the name the player is created
      sound: { src: ['/information.mp3'] }  // The settings to pass to Howler
    },
    typing: {
      sound: { src: ['/information.mp3'] },
      settings: { oneAtATime: true }  // The custom app settings
    },
    deploy: {
      sound: { src: ['/deploy.mp3'] }
    },
  }
}
export default ({ children }) => (
  <ThemeProvider theme={createTheme(genproTheme)}>
    <SoundsProvider sounds={createSounds(mySounds)}>
      <Arwes animate background='/background.jpg' pattern='/glow.png'>
        <div className="page">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"/>
          {children}
          <div className="footer-wrapper">
            <div className="footer">
              <Footer animate>
                  <div className="footer-inner">
                  <h2>Coded on 🍨</h2>
                &copy; {new Date().getFullYear()} AnanyaNegi
                  </div>
              </Footer>
            </div>
          </div>
        </div>
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>
)
