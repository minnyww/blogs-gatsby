import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  console.log("data : ", siteMetadata)
  return (
    <Layout>
      <SEO title="Min | Home" />
      <h2>Hello everyone !</h2>
      <p>{siteMetadata.description}</p>
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
      />
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
  }
`
