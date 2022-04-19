import React from 'react'
import Link from '@mui/material/Link';
import logo from '../images/coHousingImage.svg'
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
      <Space size={5} />
        <Link  href="/">
            <img src={logo} alt="???" height={100}/>
        </Link>
      </Flex>
      <Flex variant="spaceBetween" alignItems="center">
      <nav>
          <Link 
            color="#a2533e"
            href="/about"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk"}}>
            CoHousing
          </Link>
          <Link 
              color="#a2533e"
            href="/news"
            fontSize={20}
            underline="hover"
            whiteSpace={"nowrap"}
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Pilot Project
          </Link>
          <Link
            color="#a2533e"
            href="/temp"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Membership
          </Link>
          <Link
            color="#a2533e"
            href="/temp"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Resources
          </Link>
          <Link
            color="#a2533e"
            href="/temp"
            fontSize={20}
            underline="hover"
            sx={{ my: 1, mx: 1.5, fontFamily: "Space Grotesk" }}>
            Contact
          </Link>
          <Link
            color="#a2533e"
            href="/temp"
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
          {/* <Link  href="/"   sx={{ flexGrow: 1 }}>
            <img src={logo} alt="???" height={100}/>
          </Link> */}
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
                    <NavLink to="/" className={mobileNavLink}>
                    CoHousing
                    </NavLink>
                    <NavLink to="/" className={mobileNavLink}>
                    Pilot Project
                    </NavLink>
                    <NavLink to="/" className={mobileNavLink}>
                    Membership
                    </NavLink>
                    <NavLink to="/" className={mobileNavLink}>
                    Resources
                    </NavLink>
                    <NavLink to="/" className={mobileNavLink}>
                    Contact
                    </NavLink>
                    <NavLink to="/" className={mobileNavLink}>
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

