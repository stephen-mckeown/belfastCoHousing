
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Intro from '../components/intro'
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import {
  Box,
  FlexList,
  Space,
  Container
} from "../components/ui"

const ResourcesPage = () => {
  return (
    <Layout pageTitle="Recources">
      <Container>
        <FlexList variant="responsive" >
          <Box center fitContent>
            Cohousing Explained (1min)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/95B_L_WaQF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box center fitContent>
            What is Cohousing? (2mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WwhMIjEqbjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </FlexList>
        <FlexList variant="responsive" >
          <Box center>
            TED - How cohousing can make us happier (and live longer) | Grace Kim (10mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mguvTfAw4wk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box center>
            Co-housing, a Future Way of Living Together | Eef Tanghe | TEDxLeuven (15mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/h6e7d8cwdLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </FlexList>
        <FlexList variant="responsive" >
          <Box center>
            Ecological cohousing at LILAC Leeds: Paul Chatterton at TEDxLeeds (17mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WUpRHUDcqLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box center>
            Charming Community Cohousing Project - Marmalade Lane from Mole Architects (10mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/p1drtxhtpmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </FlexList>
        <FlexList variant="responsive" >
          <Box center>
            Lancaster Cohousing (3mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ieBH2PbtEbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box center>
            Sociocracy for all - What is sociocracy? (20mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ieBH2PbtEbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </FlexList>
        <FlexList variant="responsive" >
        <Box center>
            Sociocracy: Thinking Smarter Together | John Buck | TEDxUMD (16mins)
            <iframe width="560" height="315" src="https://www.youtube.com/embed/K3s6Ak-iCug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        <Box center>
          Sociocracy demonstration (13 mins)
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uJG5f4EBGGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
        </FlexList>
      </Container>
    </Layout>
  )
}

export default ResourcesPage

