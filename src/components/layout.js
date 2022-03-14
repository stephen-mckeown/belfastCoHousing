import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'
  import  NavBar from './navbar'



const Layout = ({ pageTitle, children }) => {
  return (
      <div className={container}>
      <title>{pageTitle}</title>
      <h1>Belfast CoHousing</h1>
   
      <NavBar />
     
      {/* <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav> */}
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout