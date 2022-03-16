import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>We are Cohousing Belfast.</p>
      <p>We believe in a future where housing is green and affordable.</p>
      <StaticImage
        alt="Belfast Brick Build Blue"
        src="../images/belfastBlue.png"
      />  
    </Layout>
  )
}

export default IndexPage
