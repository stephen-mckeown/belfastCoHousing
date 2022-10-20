import React from 'react';
// import Container from '@mui/material/Container';

import { StaticImage } from 'gatsby-plugin-image';
import {
  Box, Container, Heading, Text
} from "./ui";

// import * as styles from './hero.module.css'

const Intro = () => (
<Container  width="normal">
<Box center paddingY={0}>
    <StaticImage
     width={800}
    alt="housing sketch"
    src='../images/isoLarge.jpeg'
    /> 
  </Box>
  <Box center paddingY={3}>
    <Heading as="h1">Who  are  we?</Heading>
    <Text variant = "body">
    Belfast Cohousing is part of the community-led housing movement.  Our aim is to create a permanently affordable housing project in Belfast, with 12-20 energy efficient homes in a mixed tenure development, where residents enjoy the privacy of their own homes, and also have use of extensive common facilities such as open space, courtyards, a playground and a common house.     
    Our intention is to create a sustainable neighbourhood that is multi-generational and diverse; where residents actively cooperate in the planning, design and construction of the project and in maintaining its shared resources when up and running; and where residents have one goal in mind: to create and be part of a vibrant diverse community living in a safe, and mutually supportive environment.
    </Text>
  </Box>
  <Box center paddingY={4}>
  <Heading as="h1">What is cohousing?</Heading>
    <Text variant = "body"> 
    Cohousing communities are created and run by their residents. Each household has a self-contained home and the community shares some resources and activities. The site, social activities and governance are all designed to balance privacy with beneficial social interaction. The focus is on community, a neighbourhood where people want to band together, take care of one another and collaborate for the good of all.
      </Text>
  </Box>
  <Box center paddingY={4}>
    <StaticImage
    width={700}
    alt="housing sketch"
    src='../images/cohousingCartoon.png'
    /> 
  </Box>
</Container>
)

export default Intro



