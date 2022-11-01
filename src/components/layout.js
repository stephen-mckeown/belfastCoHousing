import * as React from 'react'
import "../styles.css.ts"
import Footer from './footer'
import Head from "./head"
import Navigation from './navigation'
import { Box, Heading } from '../components/ui'



const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Box center paddingY={3}>
      <Heading as="h1">Belfast Cohousing</Heading>
        <Heading as="h1">Coming soon...</Heading>
    </Box>
      {/* <Navigation /> */}
      {/* <main> */}
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {/* {props.children} */}
      {/* </main> */}
      <Footer />
    </>
  )
}
export default Layout