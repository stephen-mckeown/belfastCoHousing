import * as React from 'react'
import Layout from '../components/layout'
import "@fontsource/space-grotesk"
import  Intro  from '../components/intro'
// import  AboutLeadership  from '../components/about-leadership'
import  ProductList  from '../components/product-list'
import { Box, Heading } from '../components/ui'



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
