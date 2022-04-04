import React from 'react'
import Link from '@mui/material/Link';
import logo from '../images/coHousingImage.svg'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import * as styles from './navigation.module.css'
import Container from '@mui/material/Container';

const Navigation = () => {
   return (
   <AppBar
    position="static"
    color="inherit"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
    <Container maxWidth="lg">
      <Toolbar component="nav" >
          <Link  href="/"   sx={{ flexGrow: 1 }}>
            <img src={logo} alt="???" height={100}/>
          </Link>
          <Link className={styles.navigationItem}
            color="#a2533e"
            href="/about"
            fontSize={20}
            sx={{ my: 1, mx: 1.5 }}>
            About
          </Link>
          <Link className={styles.navigationItem}
              color="#a2533e"
            href="/news"
            fontSize={20}
            sx={{ my: 1, mx: 1.5 }}>
            News
          </Link>
          <Link className={styles.navigationItem}
            color="#a2533e"
            href="/temp"
            fontSize={20}
            sx={{ my: 1, mx: 1.5 }}>
            Stuff
          </Link>
    </Toolbar>
  </Container>
</AppBar>
   )}

export default Navigation