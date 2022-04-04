import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import logo from '../images/sadf.svg'
import { StaticImage } from 'gatsby-plugin-image'

// import * as styles from './hero.module.css'

const Intro = () => (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
    <Typography
      component="h2"
      variant="h3"
      align="center"
      color="text.primary"
      gutterBottom
    >
      We are Cohousing Belfast
    </Typography>
    <Typography variant="h5" align="center" color="text.secondary" component="p">
    Anim aute id magna aliqua ad ad non deserunt sunt. 
    Qui irure qui lorem cupidatat commodo. 
    Elit sunt amet fugiat veniam occaecat fugiat aliqua.sdf
        </Typography>
        <StaticImage
        alt="Belfast Brick Build Blue"
        src='../images/sadf.svg'
      /> 
        </Container>
)

export default Intro



