import React from 'react'
import Link from '@mui/material/Link';
import logo from '../images/coHousingImage.svg'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as styles from './navigation.module.css'

const Navigation = () => (
  
  <AppBar
    position="static"
    color="inherit"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divbider}` }}
    >
    <Toolbar component="nav">
        <Link  href="/"   sx={{ flexGrow: 1 }}>
          <img src={logo} alt="???" height={100}/>
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/about"
          sx={{ my: 1, mx: 1.5 }}>
          About
        </Link>

        <Link 
          variant="button"
          color="text.primary"
          href="/news"
          sx={{ my: 1, mx: 1.5 }}>
          News
        </Link>

        <Link
          variant="button"
          color="text.primary"
          href="/temp"
          sx={{ my: 1, mx: 1.5 }}>
          Stuff
        </Link>
  </Toolbar>
</AppBar>
)

export default Navigation


// variant="button"
// color="text.primary"
// href="#"
// sx={{ my: 1, mx: 1.5 }}



{/* <ul className={styles.navigation}>
<li className={styles.navigationItem}>
  <Link to="/about" activeClassName="active">
    About
  </Link>
</li>
<li className={styles.navigationItem}>
  <Link 
  to="/news" 
  activeClassName="active">
    News
  </Link>
</li>
<li className={styles.navigationItem}>
  <Link to="/temp" activeClassName="active">
    Stuff
  </Link>
</li>
</ul> */}