import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage, getSrc } from "gatsby-plugin-image"
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

function AboutProfile({prop, placeholder, index}) {

  return (
    <Box width="third" padding={4} center>
      {prop?.image?.[0]?.node?.gatsbyImageData ? (
        <GatsbyImage alt="" image={getImage(prop?.image?.[0]?.node?.gatsbyImageData)} />
      ) :  <GatsbyImage alt="" image={getImage(placeholder)} />}
      <Space size={3} />
      <Box>
        {prop.frontmatter.title && (
          <Text variant="medium" bold center>
            {prop.frontmatter.title}
          </Text>
        )}
        {prop.html && (
          <Text variant="medium" center>
             <div className="post-body" dangerouslySetInnerHTML={{ __html: prop.html }} />
          </Text>
        )}
      </Box>
    </Box>
  )
}

const AboutLeadership = ( ) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {extension: {eq: "jpeg"}}) {
      edges {
        node {
          absolutePath
        }
      }
    }
    allImageSharp(sort: {fields: fixed___originalName}) {
      edges {
        node {
          id
          gatsbyImageData(width: 200, height: 200)
          fluid {
            originalName
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {slug: {regex: "/user/"}}}
      sort: {fields: frontmatter___title}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          image
        }
        excerpt
        html
      }
    }
  }
  `)

  
 const props = data.allMarkdownRemark.nodes
 const images = data.allImageSharp.edges

var asdf = props.map(x =>{ 
  var imagePic = images.filter(y => {
    return y.node.fluid.originalName == x.frontmatter.image
    })
  return Object.assign({image: imagePic}, x)
})
  return (
    <Section>
      <Container width="tight">
        <Box center paddingY={4}>
           <Heading as="h1">Who we are</Heading>
            <Text>Who we are sub text blab blab</Text>
        </Box>
        <FlexList gutter={false} gap={0} variant="center" alignItems="start">
          {asdf.map((profile, index) => (
            <AboutProfile key={index} prop={profile} placeholder={images[0].node.gatsbyImageData} index={index}/>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export default AboutLeadership