import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import Seo from "../components/seo"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data


  return (
    <Layout location={location} title={siteTitle}>
      {/* <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
      <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <Typography
              variant="h4"
              align="left"
              color="text.primary"
              itemProp="headline"
            >
              {post.frontmatter.title}
            </Typography>
            <Typography
              variant="h6"
              align="left"
              color="text.secondary"
              itemProp="headline"
            >
              {post.frontmatter.date}
            </Typography>
          </header>
            <Typography
              variant="body1"
              align="left"
              color="text.primary"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.html }}
            >
            </Typography>
        </article>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
