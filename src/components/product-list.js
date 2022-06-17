import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  Section,
  SectionAngled,
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
      <Subhead>{prop.frontmatter.title}</Subhead>
      {prop.html && (
          <Text variant="medium" center>
             <div className="post-body" dangerouslySetInnerHTML={{ __html: prop.html }} />
          </Text>
        )}
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
   <div>
    <SectionAngled background="angledInv"/>
      <Section background="redish">      
        <Container width="tight" >
          <Box center paddingY={1}>
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
    <SectionAngled background="angled"/>
  </div>
  )
}

