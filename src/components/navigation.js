import React from 'react'
import Link from '@mui/material/Link';
import logo from '../images/coHousingLogo.svg'
import logoReverse from '../images/coHousingLogoReverse.svg'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { graphql, useStaticQuery } from "gatsby"

// import * as styles from './navigation.module.css'
// import Container from '@mui/material/Container';

import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./navigation.css"
import NavItemGroup from "./nav-item-group"
// import BrandLogo from "./brand-logo"


const Navigation = () => {
const [isOpen, setOpen] = React.useState(false)

React.useEffect(() => {
  if (isOpen) {
    document.body.style.overflowY = "hidden"
  } else {
    document.body.style.overflowY = "visible"
  }
}, [isOpen])

return (
  <header>
    <Container className={desktopHeaderNavWrapper}   >
      <Flex alignItems="start">
      {/* <Space size={5} /> */}
        <Link  href="/">
            <img src={logo} alt="???" height={80}/>
        </Link>
      </Flex>
      <Flex variant="spaceBetween" alignItems="center">
      <nav>
          <Link 
            color="#a2533e"
            href="/cohousing"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk"}}>
            CoHousing
          </Link>
          <Link 
              color="#a2533e"
            href="/pilot"
            fontSize={20}
            underline="hover"
            whiteSpace={"nowrap"}
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Pilot Project
          </Link>
          <Link
            color="#a2533e"
            href="/membership"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Membership
          </Link>
          <Link
            color="#a2533e"
            href="/resources"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Resources
          </Link>
          <Link
            color="#a2533e"
            href="/contact"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Contact
          </Link>
          <Link
            color="#a2533e"
            href="/news"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            FAQ
          </Link>
          </nav>
          </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Flex variant="spaceBetween">
        <Link  href="/">
          {isOpen ? <img src={logoReverse} alt="???" height={80}/> : <img src={logo} alt="???" height={80}/>}
        </Link>
          <InteractiveIcon
          title="Toggle menu"
          onClick={() => setOpen(!isOpen)}
          className={
            mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
          }
        >
          {isOpen ? <X /> : <Menu />}
        </InteractiveIcon>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
  
                    <NavLink to="/" className={mobileNavLink}>
                    Home
                    </NavLink>
                    <NavLink to="/cohousing" className={mobileNavLink}>
                    CoHousing
                    </NavLink>
                    <NavLink to="/pilot" className={mobileNavLink}>
                    Pilot Project
                    </NavLink>
                    <NavLink to="/membership" className={mobileNavLink}>
                    Membership
                    </NavLink>
                    <NavLink to="/resources" className={mobileNavLink}>
                    Resources
                    </NavLink>
                    <NavLink to="/contact" className={mobileNavLink}>
                    Contact
                    </NavLink>
                    <NavLink to="/faq" className={mobileNavLink}>
                    FAQ
                    </NavLink>
            </FlexList>
          </nav>
        </div>
      )}
</header>
   )  
   }

export default Navigation

