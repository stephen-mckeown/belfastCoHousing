import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "@fontsource/space-grotesk"
import  Navigation  from '../components/navigation'
import  Footer  from '../components/footer'

const IndexPage = () => {
  return (    
  <React.Fragment>

    <Layout pageTitle="Home">
      <p>We are Cohousing Belfast.</p>
      <p>We believe in a future where housing is green and affordable.</p>
      <StaticImage
        alt="Belfast Brick Build Blue"
        src="../images/belfastBlue.png"
      />  
    </Layout>

        </React.Fragment>
  )
}

export default IndexPage
