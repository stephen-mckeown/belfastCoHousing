import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



const NewsPage = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
console.log(data.allMarkdownRemark.nodes)
  return (
    <Layout pageTitle="News">
      <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
        <ol style={{ listStyle: `none`, paddingInlineStart: 0 }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                  <Link 
                    href={post.fields.slug}
                    itemProp="url"
                    fontFamily="Space Grotesk"
                    color="#0d1d48"
                    underline="hover">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
                <div style={{flexDirection:'column',   display: 'flex'}}>
                  <Typography
                    variant="body1"
                    align="left"
                    color="text.secondary"
                    itemProp="description"
                  >
                    {post.frontmatter.date}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="left"
                    color="text.primary"
                    gutterBottom
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  >
                  </Typography>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
      </Container>
    </Layout>
  )
}

export default NewsPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {slug: {regex: "/news/"}}}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          slug
          date
          title
        }
      }
    }
  }
`