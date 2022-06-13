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

const CoHousingPage = () => {
  return (
    <Layout pageTitle="Cohousing">
      <Container  width="normal">
        <Box center paddingY={3}>
          <Subhead as="h1">WHAT IS COHOUSING?</Subhead>
          <Text variant = "lead"> Cohousing communities are created and run by their residents. Each household has a self-contained home and the community shares some resources and activities. The site, social activities and governance are all designed to balance privacy with beneficial social interaction. The focus is on community, a neighbourhood where people want to band together, take care of one another and collaborate for the good of all.</Text>
          <Text variant = "lead">It is a form of intentional community that has been developing, particularly in Denmark and other European countries, since the 1970s. It has been taken up enthusiastically in the USA and more recently in the UK, where there are a few long-established cohousing projects, several brand new ones and many now in the pipeline! Below are some cohousing examples from around the UK</Text>
      </Box>

      <Box center paddingY={4}>
      <Subhead as="h1">LILAC, LEEDS</Subhead>
        <Text variant = "lead">LILAC are a co-housing community of 20 eco-build households in West Leeds. The homes and land are managed by residents through a Mutual Home Ownership Society</Text>
        <Text variant = "lead">www.lilac.coop</Text>
          <StaticImage
              width={500}
            alt="Lilic cohousing view"
            src='../images/lilac.jpg'
            /> 
      </Box>

      <Box center paddingY={4}>
      <Subhead as="h1">MARMALADE LANE, CAMBRIDGE</Subhead>
        <Text variant = "lead">A sustainable neighbourhood of 42 homes with extensive community facilities and a sociable shared garden and car-free lane</Text>
        <Text variant = "lead">www.marmaladelane.co.uk</Text>
          <StaticImage
              width={500}
            alt="Marmalade Lane cohousing view"
            src='../images/marmaladeLane.png'
            /> 
      </Box>

      <Box center paddingY={4}>
      <Subhead as="h1">BRIDPORT COHOUSING, BRIDPORT</Subhead>
        <Text variant = "lead">The UK's biggest cohousing project: 53 sustainable, affordable eco-homes to buy and rent</Text>
        <Text variant = "lead">www.bridportcohousing.org.uk</Text>
          <StaticImage
              width={500}
            alt="Marmalade Lane cohousing view"
            src='../images/bridport.png'
            /> 
      </Box>

      <Box center paddingY={4}>
        <Text variant = "lead">Every cohousing project is different as it is developed and created by the residents themselves, designed for their needs and likes. For Belfast Cohousing, two concepts are vital to what we wish to achieve as a Cooperative. These concepts are:
          Sociocracy which is a process of making group decisions.
          Mutual Home Ownership which is a model for group ownership of the whole site.
          Below these two concepts are explained in more detail.
        </Text>
          <StaticImage
          width={5000}
            alt="side view cut away"
            src='../images/sideSketch.png'
            /> 
      </Box>

      <Box center paddingY={3}>
          <Subhead as="h1">WHAT IS MUTUAL HOME OWNERSHIP?</Subhead>
          <Text variant = "lead">The Mutual Ownership model is an innovative concept, designed as an alternative to conventional home ownership. Instead of individuals owning their own homes, all the properties on a development are owned by a co-operative society. Residents pay a monthly charge to the co-operative society, in return for which they build up their share of the equity in the society. This gives residents an interest in the value of the housing assets owned by the co-op. When a resident leaves, they can take the monetary value of their equity share with them. The value of equity may be indexed to an appropriate external measure such as local wages.</Text>
          <Subhead as="h1">HOUSES REMAIN PERMANENTLY AFFORDABLE</Subhead>
          <Text variant = "lead">By disconnecting the occupation of the property from the underlying value of the land, it protects the scheme from fluctuations in the property market</Text>
          <Subhead as="h1">THE OVERALL COST OF BORROWING IS CHEAPER</Subhead>
          <Text variant = "lead">There is a single mortgage, held by the co-operative society, which means that the scheme is open to residents who may be unable to obtain an individual mortgage themselves in the traditional way</Text>
          <Subhead as="h1">MANAGEMENT OF THE HOMES IS CONTROLLED BY THE RESIDENTS</Subhead>
          <Text variant = "lead">All the residents of the scheme are members of the co-op, which means they are protected from the individual choices and decisions of a private landlord. It is a suitable model for cohousing, because it lends itself to housing developments where residents co-design and co-manage their own living spaces</Text>
      </Box>

      {/* <Box center paddingY={3}>
          <Subhead as="h1">WHAT IS SOCIOCRACY??</Subhead>
          <Text variant = "lead">The Mutual Ownership model is an innovative concept, designed as an alternative to conventional home ownership. Instead of individuals owning their own homes, all the properties on a development are owned by a co-operative society. Residents pay a monthly charge to the co-operative society, in return for which they build up their share of the equity in the society. This gives residents an interest in the value of the housing assets owned by the co-op. When a resident leaves, they can take the monetary value of their equity share with them. The value of equity may be indexed to an appropriate external measure such as local wages.</Text>
          <Subhead as="h1">HOUSES REMAIN PERMANENTLY AFFORDABLE</Subhead>
          <Text variant = "lead">By disconnecting the occupation of the property from the underlying value of the land, it protects the scheme from fluctuations in the property market</Text>
          <Subhead as="h1">THE OVERALL COST OF BORROWING IS CHEAPER</Subhead>
          <Text variant = "lead">There is a single mortgage, held by the co-operative society, which means that the scheme is open to residents who may be unable to obtain an individual mortgage themselves in the traditional way</Text>
          <Subhead as="h1">MANAGEMENT OF THE HOMES IS CONTROLLED BY THE RESIDENTS</Subhead>
          <Text variant = "lead">All the residents of the scheme are members of the co-op, which means they are protected from the individual choices and decisions of a private landlord. It is a suitable model for cohousing, because it lends itself to housing developments where residents co-design and co-manage their own living spaces</Text>
      </Box> */}
    </Container> 
    </Layout>
  )
}

export default CoHousingPage