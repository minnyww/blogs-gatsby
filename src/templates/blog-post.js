import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const MarkdownContainer = styled.div`
  h2 {
    /* color: #551a8b; */
  }

  pre code {
    font-size: 14px;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const createFullPostMarkup = () => {
    return {
      __html: `${post.html.replace(
        "<h2>",
        "<h2 style={{ color:'red !important'}}>"
      )}`,
    }
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h2 style={{ marginBottom: "0rem" }}>{post.frontmatter.title}</h2>
      <small>created at : {post.frontmatter.date}</small> /{" "}
      <small>by : {post.frontmatter?.author}</small>
      <div
        style={{
          margin: "1rem",
          border: "1px solid lightgray",
          borderRadius: "12px",
          padding: "1rem",
        }}
      >
        <MarkdownContainer dangerouslySetInnerHTML={createFullPostMarkup()} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD hh:mm")
        author
      }
    }
  }
`
