import * as React from 'react'
import { Link } from 'gatsby'
  import  Navigation  from './navigation'
  import  Footer  from './footer'
  import Head from "./head"



const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Navigation />
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {props.children}
      </main>
      <Footer />
    </>
  )
}
export default Layout