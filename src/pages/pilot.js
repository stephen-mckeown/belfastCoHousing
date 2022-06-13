
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
  Subhead,
  Text,
  Box,
  Kicker,
  Space,
} from "../components/ui"

const PilotPage = () => {
  return (
    <Layout pageTitle="Pilot">
      <Container  width="normal">
        <Box center>      <Subhead>OUR PILOT PROJECT</Subhead></Box>

        <Box center paddingY={3}>
          <Text variant = "lead">The Belfast Cohousing pilot project (Harbour schemeto the right) includes 20 units: 14 apartments with 1 and 2 bedrooms for a total of 855 sqm, 6 houses with 3 and 4 bedrooms and a total of 580 sqm and a 200 sqm community house . This housing scheme could house up to 65 people. This visual of the scheme shown above and the outline design is based on a template location in the Harbour area where street parking and any road infrastructure is not required. The community house is intended to be built at the same time as the homes.</Text>
          <StaticImage
            alt="plan b view"
            src='../images/planTypeB.png'
            /> 
        </Box>
        <Box center paddingY={5}>
          <Text variant = "lead">Smaller energy efficient homes with the possibility of an element of self-build may make houses cheaper to build and run. Some aspects - the common house or high eco standards for example - can make the initial investment higher. It would require some kind of subsidy, or partnership with a housing association, to provide affordable housing as part of the community.</Text>
          <StaticImage
            width={800}
            alt="plan b view"
            src='../images/isoLarge.jpeg'
            /> 
        </Box>

        <Box center paddingY={3}>
          <Text variant = "lead">In alternative, higher density design options, the scheme requires a site with a minimum development area of 1500 sqm</Text>
          <Text variant = "lead">This design option would be 4 storeys, comprised of 2 storey townhouses with 2 storeys of flats above. This would include the same living standards and number of units as before, including the community house, shared outside space etc, but on a smaller footprint.</Text>
          <StaticImage
            alt="plan b view"
            src='../images/planTypeA.png'
            /> 
        </Box>
 

    </Container> 

    </Layout>
  )
}

export default PilotPage

//src/images/housingImage.png