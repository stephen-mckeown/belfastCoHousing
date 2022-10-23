import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import {
  Box, Container, Flex, Section,
  SectionAngled,
  Subhead,
  Text
} from "../components/ui"

const CoHousingPage = () => {
  return (
    <Layout pageTitle="Cohousing" style="color:#345">
      <Container  width="normal">
        <Box center paddingY={3}>
          <Subhead as="h1">WHAT IS COHOUSING?</Subhead>
          <Text variant = "body"> Cohousing communities are created and run by their residents. Each household has a self-contained home and the community shares some resources and activities. The site, social activities and governance are all designed to balance privacy with beneficial social interaction. The focus is on community, a neighbourhood where people want to band together, take care of one another and collaborate for the good of all.</Text>
          <Text variant = "body">It is a form of intentional community that has been developing, particularly in Denmark and other European countries, since the 1970s. It has been taken up enthusiastically in the USA and more recently in the UK, where there are a few long-established cohousing projects, several brand new ones and many now in the pipeline! Below are some cohousing examples from around the UK</Text>
        </Box>
      </Container>

      <Box paddingY={4}>
        <SectionAngled background="angledInv"/>
        <Section background="redish">    
        <Container width="narrow">
          <Flex variant="responsive">
            <div>
              <Subhead as="h1">LILAC, LEEDS</Subhead>
              <Text variant = "body">LILAC are a co-housing community of 20 eco-build households in West Leeds. The homes and land are managed by residents through a Mutual Home Ownership Society</Text>
              <Text variant = "body">www.lilac.coop</Text>
              <Text variant = "lead"> <a href="https://www.lilac.coop/">www.lilac.coop</a></Text>
            </div>
            <StaticImage
                width={3000}
              alt="Lilic cohousing view"
              src='../images/lilac.jpg'
              /> 
          </Flex>
          </Container>
        </Section>
        <SectionAngled background="angled"/>
      </Box>

      <Box paddingY={4}>
          <Container  width="narrow">
            <Flex variant="responsive">
              <div>
                <Subhead as="h1">MARMALADE LANE, CAMBRIDGE</Subhead>
                <Text variant = "lead">A sustainable neighbourhood of 42 homes with extensive community facilities and a sociable shared garden and car-free lane</Text>
                <Text variant = "lead"> <a href="https://www.marmaladelane.co.uk/">www.marmaladelane.co.uk</a></Text>
              
              </div>
              <StaticImage
                width={2000}
                alt="Marmalade Lane cohousing view"
                src='../images/marmaladeLane.png'
                /> 
            </Flex>
          </Container>
      </Box>

      <Box paddingY={4}>
        <SectionAngled background="angledInv"/>
        <Section background="redish">  
          <Container  width="narrow">
            <Flex variant="responsive">
              <div>
                <Subhead as="h1">BRIDPORT COHOUSING, BRIDPORT</Subhead>
                <Text variant = "lead">The UK's biggest cohousing project: 53 sustainable, affordable eco-homes to buy and rent</Text>
                <Text variant = "lead">www.bridportcohousing.org.uk</Text>
                <Text variant = "lead"> <a href="https://www.bridportcohousing.org.uk/">www.bridportcohousing.org.uk</a></Text>
              </div>
              <StaticImage
                width={2000}
                alt="Marmalade Lane cohousing view"
                src='../images/bridport.png'
                /> 
            </Flex>
          </Container>
        </Section>
        <SectionAngled background="angled"/>
      </Box>

      <Box center paddingY={4}>
        <Container  width="normal">
          <Text variant = "body">Every cohousing project is different as it is developed and created by the residents themselves, designed for their needs and likes. For Belfast Cohousing, two concepts are vital to what we wish to achieve as a Cooperative. These concepts are:
            Sociocracy which is a process of making group decisions.
            Mutual Home Ownership which is a model for group ownership of the whole site.
            Below these two concepts are explained in more detail.
          </Text>
            <StaticImage
            width={5000}
              alt="side view cut away"
              src='../images/sideSketch.png'
              /> 
        </Container>
      </Box>

      <Box center paddingY={4}>
        <Container width="normal">
          <Subhead as="h1">WHAT IS MUTUAL HOME OWNERSHIP?</Subhead>
          <Text variant = "body">The Mutual Ownership model is an innovative concept, designed as an alternative to conventional home ownership. Instead of individuals owning their own homes, all the properties on a development are owned by a co-operative society. Residents pay a monthly charge to the co-operative society, in return for which they build up their share of the equity in the society. This gives residents an interest in the value of the housing assets owned by the co-op. When a resident leaves, they can take the monetary value of their equity share with them. The value of equity may be indexed to an appropriate external measure such as local wages.</Text>
          <Text variant = "subheadSmall">HOUSES REMAIN PERMANENTLY AFFORDABLE</Text>
          <Text variant = "body">By disconnecting the occupation of the property from the underlying value of the land, it protects the scheme from fluctuations in the property market</Text>
          <Text variant = "subheadSmall">THE OVERALL COST OF BORROWING IS CHEAPER</Text>
          <Text variant = "body">There is a single mortgage, held by the co-operative society, which means that the scheme is open to residents who may be unable to obtain an individual mortgage themselves in the traditional way</Text>
          <Text variant = "subheadSmall">MANAGEMENT OF THE HOMES IS CONTROLLED BY THE RESIDENTS</Text>
          <Text variant = "body">All the residents of the scheme are members of the co-op, which means they are protected from the individual choices and decisions of a private landlord. It is a suitable model for cohousing, because it lends itself to housing developments where residents co-design and co-manage their own living spaces</Text>
        </Container>
      </Box>

      <Box paddingY={3}>
        <Box center paddingY={3}>
        <Container width="normal">
          <Subhead as="h1">WHAT IS SOCIOCRACY??</Subhead>
          <Text variant = "body">Sociocracy is a governance system, just like democracy or corporate governance methods. It's best suited for organizations that want to self-govern based on the values of equality.</Text>
          </Container>
        </Box>

        <Box  paddingY={3}>
        <Container width="normal">
        <Flex variant="responsive">
              <div>
          <Text variant = "subheadSmall">ORGANIZATIONAL STRUCTURE</Text>
          <ul>
            <li><Text variant = "body">Small groups are the basis of everything. Those small groups are called 'circles'</Text></li>
            <li><Text variant = "body">Those sociocracy circles have a defined aim (e.g. a description of what the circle is doing) and full authority in a domain (e.g. what the circle has authority over)</Text></li>
            <li><Text variant = "body">Circles will define roles, both to run itself smoothly and to “package” operations into meaningful bits. Any member will fill one or more roles</Text></li>
            <li><Text variant = "body">Linking roles connect circles to other related circles</Text></li>
          </ul>
          </div>
          <StaticImage
          width={400}
          alt="circles diagram"
          src='../images/circles.png'
          /> 
             </Flex>
          </Container>
        </Box>

        <Box paddingY={3}>
          <Container width="normal">
              <Text variant = "subheadSmall">DECISION MAKING AND ROUNDS</Text>
                <ul>
                  <li><Text variant = "body">Circles make policy decisions by 'consent'. There is consent to a proposal when no member of the circle has an objection. By definition, objecting requires that a circle member has reason to assume that circle cannot achieve its aim adequately if the circle approves the proposal. In other words, any circle member can flag an issue in a proposal and make sure the circle improves the proposal before passing it.</Text></li>
                  <li><Text variant = "body">At the same time, circles use consent to elect people into roles like the circle leader, secretary, facilitator or a self-defined operational role. The intention is that only people serve in offices who have the trust of all their coworkers.</Text></li>
                  <li><Text variant = "body">A circle will decide by consent what topics they put on their agenda and how much time they spend on each topic.</Text></li>
                  <li><Text variant = "body">Rounds: a trademark tool for meetings, rounds refer to the practice of talking one-by-one in meetings until everyone has spoken once in that round. The intention is to hear all voices. At the same time, rounds contribute to more mutual listening and understanding.</Text> </li>
                </ul>
                <Box center>
              <StaticImage
                width={400}
                alt="consent diagram"
                src='../images/consent.png'
              /> 
              </Box>
          </Container>
        </Box>

      </Box>

    </Layout>
  )
}

export default CoHousingPage