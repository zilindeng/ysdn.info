import React from "react"
import { graphql } from "gatsby"
import { Spring, config } from 'react-spring'
import style from './blogStyles.module.less'
import '../../utils/constant.less'

export default function Template({
   data, // this prop will be injected by the GraphQL query below.
}) {
   const {markdownRemark} = data // data.markdownRemark holds our post data
   const {frontmatter} = markdownRemark

   return (
      <div>
         {frontmatter.name}
      </div>
   )
}

export const pageQuery = graphql `
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
        website
        year
      }
    }
  }
`
