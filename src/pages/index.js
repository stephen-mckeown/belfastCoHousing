import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "@fontsource/space-grotesk"
import  Navigation  from '../components/navigation'
import  Intro  from '../components/intro'
import  AboutLeadership  from '../components/about-leadership'
import  ProductList  from '../components/product-list'


const IndexPage = () => {
  return (    
    <Layout pageTitle="Home">
      <Intro/>
      <ProductList/>
      {/* <AboutLeadership/> */}
    </Layout>
  )
}

export default IndexPage
