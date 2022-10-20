
import * as React from 'react'
import Layout from '../components/layout'
import { iframeContainer, responsiveIframe } from '../components/resources.css.ts'
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import {
  Box, Container, Flex, Text
} from "../components/ui"

const ResourcesPage = () => {
  return (
    <Layout pageTitle="Recources">
      <Container>
        <Flex responsive>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/95B_L_WaQF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box >
            <Text variant="body">Cohousing Explained (1min)</Text>
          </Box>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/WwhMIjEqbjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body"> What is Cohousing? (2mins)</Text>
          </Box>
        </Flex>

        <Flex responsive>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/mguvTfAw4wk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body">  TED - How cohousing can make us happier (and live longer) | Grace Kim (10mins)</Text>
          </Box>
          <Box center>
            <Box className={iframeContainer} >
              Co-housing, a Future Way of Living Together | Eef Tanghe | TEDxLeuven (15mins)
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/h6e7d8cwdLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body">  Co-housing, a Future Way of Living Together | Eef Tanghe | TEDxLeuven (15mins)</Text>
          </Box>
        </Flex>

        <Flex responsive>
          <Box center>
            <Box className={iframeContainer} >

              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/WUpRHUDcqLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body">Ecological cohousing at LILAC Leeds: Paul Chatterton at TEDxLeeds (17mins)</Text>
          </Box>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/p1drtxhtpmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body">Charming Community Cohousing Project - Marmalade Lane from Mole Architects (10mins)</Text>
          </Box>
        </Flex>

        <Flex responsive>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/ieBH2PbtEbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body">Lancaster Cohousing (3mins)</Text>
          </Box>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/b6r3-s2p7eI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body">Sociocracy for all - What is sociocracy? (20mins)</Text>
          </Box>
        </Flex>

        <Flex responsive>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/K3s6Ak-iCug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body"> Sociocracy: Thinking Smarter Together | John Buck | TEDxUMD (16mins)</Text>
          </Box>
          <Box center>
            <Box className={iframeContainer} >
              <iframe className={responsiveIframe} src="https://www.youtube.com/embed/uJG5f4EBGGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
            <Text variant="body">  Sociocracy demonstration (13 mins)</Text>
          </Box>
        </Flex>

      </Container>
    </Layout>
  )
}

export default ResourcesPage

