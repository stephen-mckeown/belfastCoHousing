import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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

function AboutProfile(prop) {
  return (
    <Box width="third" padding={4} center>
      {prop.image && (
        <GatsbyImage alt={prop.image.alt} image={getImage(prop.image)} />
      )}
      <Space size={3} />
      <Box>
        {prop.frontmatter.title && (
          <Text variant="medium" bold center>
            {prop.frontmatter.title}
          </Text>
        )}
        {prop.html && (
          <Text variant="medium" center>
            {prop.html}
          </Text>
          //   <Typography
          //   variant="body1"
          //   align="left"
          //   color="text.primary"
          //   itemProp="articleBody"
          //   dangerouslySetInnerHTML={{ __html: post.html }}
          // >
          // </Typography>
        )}
      </Box>
    </Box>
  )
}

//const NewsPage = ({ data, location }) => {
// export default function AboutLeadership(props) {
const AboutLeadership = ( data1 ) => {
  const data = useStaticQuery(graphql`
  query {
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
        }
        excerpt
        html
      }
    }
  }
  `)

  
 const props = data.allMarkdownRemark.nodes
 console.log("props leadership")
  console.log(props)
  return (
    <Section>
      <Container width="tight">
        {/* <Box center paddingY={4}>
          {props.kicker && <Kicker>{props.kicker}</Kicker>}
          {props.heading && <Heading as="h1">{props.heading}</Heading>}
          {props.subhead && <Text>{props.subhead}</Text>}
        </Box> */}
        <FlexList gutter={false} gap={0} variant="center" alignItems="start">
          {props.map((profile, index) => (
            <AboutProfile key={index} {...profile} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export default AboutLeadership

// export const pageQuery = graphql`
// query {
//   allMarkdownRemark(
//     filter: {frontmatter: {slug: {regex: "/user/"}}}
//     sort: {fields: frontmatter___title}
//   ) {
//     nodes {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         description
//       }
//       excerpt
//       html
//     }
//   }
// }
// `