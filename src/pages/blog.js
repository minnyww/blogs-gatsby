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
      <div class="pt-15">
        <div class="grid gap-6 mb-8 md:grid-cols-2">
          {posts.map(post => (
            <Link
              to={post.fields.slug}
              key={post.id}
              style={{ textDecoration: "none" }}
            >
              <div class="min-w-0 p-4 text-white bg-indigo-800 rounded-lg shadow-xs">
                <h4 class="mb-4 font-semibold">{post.frontmatter.title}</h4>
                <p>{post.excerpt}</p>
                <small>
                  by : {post.frontmatter.author}, {post.frontmatter.date}
                </small>
              </div>
            </Link>
          ))}
        </div>
      </div>
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
