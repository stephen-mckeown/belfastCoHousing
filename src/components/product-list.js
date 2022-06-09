import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"

function Product(prop) {
  console.log(prop)
  return (
    <Box width="third" padding={4} center>
      {/* {props.image && (
        <Icon alt={props.image.alt} image={props.image} size="large" />
      )} */}
      <Subhead>{prop.frontmatter.title}</Subhead>
      {prop.html && (
          <Text variant="medium" center>
             <div className="post-body" dangerouslySetInnerHTML={{ __html: prop.html }} />
          </Text>
        )}
      {/* <Text>{props.text}</Text>
      <LinkList links={props.links} /> */}
    </Box>
  )
}

export default function ProductList() {

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
    <Section>
      <Container width="tight">
        <Box center paddingY={3}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <FlexList gutter={false} gap={0} variant="center" alignItems="start">
          {props.map((product, index) => (
              <Product {...product} key={index}/>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

