
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
    <div>


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
      {/* <div style={{ flexDirection: "row" }}>
        <Box className={iframeContainer} >
          Cohousing Explained (1min)
          <iframe className={responsiveIframe} width="560" height="315" src="https://www.youtube.com/embed/95B_L_WaQF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
        <Box className={iframeContainer} >
          Cohousing Explained (1min)
          <iframe className={responsiveIframe} width="560" height="315" src="https://www.youtube.com/embed/95B_L_WaQF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
      </div> */}
    </div>

  )
}

export default ResourcesPage

