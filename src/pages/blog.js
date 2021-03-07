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
      <h1>My blog posts</h1>

      {posts.map(post => (
        <div
          key={post.id}
          style={{
            border: "1px solid lightgray",
            margin: "1rem",
            padding: "1rem",
          }}
        >
          <article>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>

            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
          </article>
        </div>
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
