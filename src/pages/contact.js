import React from "react"
import LayoutTutorial4 from "../components/layout-tutorial-4"
import { graphql } from "gatsby"

export default function Contact({ data }) {
  return (
    <LayoutTutorial4>
      <div style={{ margin: `3rem auto`, width: 500 }}>
        <h1>Contact me</h1>
        <h2>{data.site.siteMetadata.title}</h2>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </div>
    </LayoutTutorial4>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`