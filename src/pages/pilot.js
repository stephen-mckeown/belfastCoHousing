
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import  Intro  from '../components/intro'
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
} from "../components/ui"

const PilotPage = () => {
  return (
    <Layout pageTitle="Pilot">
              <Container  width="normal">
        <Box center paddingY={3}>
          <Heading as="h1">Pilot Project</Heading>
          <Text variant = "lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
      </Box>
      <StaticImage
      alt="Belfast Brick Build Blue"
      src='../images/yorSpaceHouse.svg'
      /> 
      <Box center paddingY={4}>
        <Text variant = "lead"> Anim aute id magna aliqua ad ad non deserunt sunt. 
          Qui irure qui lorem cupidatat commodo. 
          Elit sunt amet fugiat veniam occaecat fugiat aliqua.sdf</Text>
      </Box>
      <Box center paddingY={4}>
        <StaticImage
        alt="Morey Mews"
        src='../images/moreyMews.jpg'
        /> 
       </Box>
    </Container> 
    </Layout>
  )
}

export default PilotPage

//src/images/housingImage.png