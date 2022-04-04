import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading
  } from './layout.module.css'
  import  Navigation  from './navigation'
  import  Footer  from './footer'



const Layout = ({ pageTitle, children }) => {
  return (
      <div>
        <Navigation />
      <main>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout