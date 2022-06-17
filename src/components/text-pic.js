import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import {
  Container,
  Section,
  SectionAngled,
  FlexList,
  Text,
  Flex,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"



export default function TextPic() {

    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/productList/"}}}) {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }
    }
    `)

    const props = data.allMarkdownRemark.nodes

  return (
  <div>
    <SectionAngled background="angledInv"/>
    <Section background="redish"> 
      <Container width="normal" >
        <Subhead as="h1">BRIDPORT COHOUSING, BRIDPORT</Subhead>
        <Flex>
          <Container>
            <Text variant = "lead">The UK's biggest cohousing project: 53 sustainable, affordable eco-homes to buy and rent</Text>
            <Text variant = "lead">www.bridportcohousing.org.uk</Text>
          </Container>
          <StaticImage
              width={700}
            alt="Marmalade Lane cohousing view"
            src='../images/bridport.png'
            /> 
        </Flex>
      </Container>
    </Section>
    <SectionAngled background="angled"/>
  </div>
  )
}

