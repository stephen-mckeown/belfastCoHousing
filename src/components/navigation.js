import React from 'react'
import { Link } from 'gatsby'
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
      <Toolbar 
      // sx={{ flexWrap: 'wrap' }}
      >
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img src={logo} alt="???" height={100} />
    </Link>
    <ul className={styles.navigation}>
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
    </ul>
  </nav>
  </Toolbar>
</AppBar>
)

export default Navigation


{/* <AppBar
position="static"
color="default"
elevation={0}
sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
>
<Toolbar sx={{ flexWrap: 'wrap' }}>
  <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
    Company name
  </Typography>
  <nav>
    <Link
      variant="button"
      color="text.primary"
      href="#"
      sx={{ my: 1, mx: 1.5 }}
    >
      Features
    </Link>
    <Link
      variant="button"
      color="text.primary"
      href="#"
      sx={{ my: 1, mx: 1.5 }}
    >
      Enterprise
    </Link>
    <Link
      variant="button"
      color="text.primary"
      href="#"
      sx={{ my: 1, mx: 1.5 }}
    >
      Support
    </Link>
  </nav>
  <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
    Login
  </Button>
</Toolbar>
</AppBar> */}