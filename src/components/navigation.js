import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/coHousingImage.svg'

import * as styles from './navigation.module.css'

const Navigation = () => (
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
        <Link to="/news" activeClassName="active">
          News
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/news" activeClassName="active">
          Stuff
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation