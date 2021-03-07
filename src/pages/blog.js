import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const { posts } = data.blog
  console.log("data : ", posts)

  return (
    <Layout>
      <SEO title="My blog posts" />

      {posts.map(post => (
        <Link
          to={post.fields.slug}
          key={post.id}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              border: "1px solid lightgray",
              margin: "1rem",
              padding: "1rem",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ color: "#333131" }}>{post.frontmatter.title}</h3>
            <p style={{ color: "#333131" }}>{post.excerpt}</p>
            <small>
              by : {post.frontmatter.author}, {post.frontmatter.date}
            </small>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default React.memo(Blog)

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
