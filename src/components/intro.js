import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { StaticImage } from 'gatsby-plugin-image'
import {
  Container,
  FlexList,
  Heading,
  Section,
  Text,
  Box,
  Kicker,
  Space,
} from "./ui"

// import * as styles from './hero.module.css'

const Intro = () => (
<Container  width="normal">
  <Box center paddingY={3}>
    <Heading as="h1"> We are Cohousing Belfast</Heading>
    <Text variant = "lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
  </Box>
  <Box center paddingY={0}>
    <StaticImage
     width={800}
    alt="housing sketch"
    src='../images/isoLarge.jpeg'
    /> 
  </Box>
  <Box center paddingY={3}>
    <Text variant = "lead"> Anim aute id magna aliqua ad ad non deserunt sunt. 
      Qui irure qui lorem cupidatat commodo. 
      Elit sunt amet fugiat veniam occaecat fugiat aliqua.sdf</Text>
  </Box>
  <Box center paddingY={0}>
    <StaticImage
    width={500}
    alt="housing sketch"
    src='../images/isoBW.jpeg'
    /> 
  </Box>
</Container>
)

export default Intro



