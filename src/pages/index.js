import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "@fontsource/space-grotesk"
import  Navigation  from '../components/navigation'
import  Intro  from '../components/intro'

const IndexPage = () => {
  return (    
    <Layout pageTitle="Home">
      <Intro/>
    </Layout>
  )
}

export default IndexPage
