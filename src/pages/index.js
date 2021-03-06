import * as React from "react"
import { graphql, Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    site: { siteMetadata },
    blog: { posts },
  },
}) => {
  console.log("posts :", posts)
  return (
    <Layout>
      <SEO title="Min | Home" />
      {/* <p>{siteMetadata.description}</p>
      <p>
        <a href="https://github.com/minnyww" style={{ textDecoration: "none" }}>
          go to my github
        </a>
      </p>
      <StaticImage
        src="https://obs.line-scdn.net/0hqik8uAbuLkZWQQaHkDBREWwXLSllLT1FMnd_RQovcHIvIW5COSRmKHURd3QucmkYOHdmKHZJNXcoJWpHaSdm/w1200"
        width={500}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="vonder seed round"
        style={{ marginBottom: `1.45rem` }}
        placeholder="blurred"
      /> */}
      <div className="pt-15">
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          {posts.map(post => (
            <Link
              to={post.fields.slug}
              key={post.id}
              style={{ textDecoration: "none" }}
            >
              <div className="min-w-0 p-4  bg-white-600 rounded-lg shadow shadow-xs">
                <h4 className="mb-4 font-semibold text-indigo-600">
                  {post.frontmatter.title}
                </h4>
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

export default IndexPage

export const query = graphql`
  query {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      siteMetadata {
        title
        description
        author
      }
    }
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
