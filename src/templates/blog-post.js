import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const MarkdownContainer = styled.div`
  h2 {
    /* color: #551a8b; */
    font-size: 20px;
    line-height: 2rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 18px;
    margin-top: 2rem;
  }

  p {
    font-size: 16px;
    line-height: 2rem;
  }

  pre code {
    font-size: 14px;
    color: #f1f1f1;
  }
  pre {
    background-color: #1d1d1d;
    padding: 1rem;
    border-radius: 12px;
    margin-top: 1rem;
  }

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 12px;
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const createFullPostMarkup = () => {
    // return {
    //   __html: `${post.html.replace(
    //     "<h2>",
    //     "<h2 style={{ color:'red !important'}}>"
    //   )}`,
    // }
    return {
      __html: `${post.html}`,
    }
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="w-full h-screen mt-6">
        <div className="flex flex-col lg:grid w-full">
          {/* <div className="lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0"> */}

          <div className="-mt-6 relative">
            <h2 className="text-indigo-600 text-2xl">
              {post.frontmatter.title}
            </h2>
            <div>
              <p className="text-sm">{post.frontmatter?.author}</p>
              <p className="text-opacity-50 text-xs">
                created at : {post.frontmatter.date}
              </p>
            </div>
            <br />
            <div className="font-medium md:text-sm 2xl:text-3xl 2xl:pb-8 2xl:mx-2">
              <MarkdownContainer
                dangerouslySetInnerHTML={createFullPostMarkup()}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* <h2 style={{ marginBottom: "0rem" }}>{post.frontmatter.title}</h2>
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
      </div> */}
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
