import * as React from 'react'
import "../styles.css.ts"
import Footer from './footer'
import Head from "./head"
import Navigation from './navigation'



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