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
  pre {
    background-color: #262527;
    padding: 1rem;
    border-radius: 12px;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-radius: 12px;
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
      <div class="w-full h-screen">
        <div class="flex flex-col lg:grid w-full">
          <div class="bg-indigo-800 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
            <div class="mx-6 my-8 2xl:mx-10">
              <img
                class="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4"
                src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <h1 class="text-white text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">
                created at : {post.frontmatter?.author}
              </h1>
              <h2 class="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">
                {post.frontmatter.date}
              </h2>
            </div>
            <div class="-mt-6 relative">
              <p class="text-white text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">
                {post.frontmatter.title}
              </p>
              <br />
              <div class="text-white font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">
                <MarkdownContainer
                  dangerouslySetInnerHTML={createFullPostMarkup()}
                />
              </div>
            </div>
          </div>
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
