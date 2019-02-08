import React from "react"
import { graphql } from "gatsby"
import { Spring, config } from 'react-spring'
import style from './blogStyles.module.less'
import '../../utils/constant.less'

export default function Template({
   data, // this prop will be injected by the GraphQL query below.
}) {
   const {markdownRemark} = data // data.markdownRemark holds our post data
   const {frontmatter, html} = markdownRemark

   const coverImage = {
      backgroundImage: `url(${frontmatter.cover})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%"
   }

   return (
      <Spring
      config={{tension: 320, friction: 30, clamp: true }}
      from={{ opacity: 0, paddingTop: 200 }}
      to={{ opacity: 1, paddingTop: 0 }}>
      {props => <div style={props}>

      <div className={style.blogPostContainer}>
         <div style={{
            color: "white",
            position: "fixed",
            transform: "rotate(-90deg)",
            transformOrigin: "100% 130%",
            zIndex: "999",
         }}>Back ↗</div>

      <div className={style.blogPost}>

         <div style={{
            fontSize: "14px",
            color: "white",
         }}>{frontmatter.date}</div>

         <div style={{
            fontFamily: "Arial",
            margin: "0 14%",
            color: "white",
         }}>{frontmatter.title}</div>

         <div style={{
            margin: "0 28% 0 0",
            color: "white",
            fontFamily: "Hiragino Sans",
            fontWeight: "200",
            fontSize: "36px",
         }}>{frontmatter.subtitle}</div>

         <div style={{
               paddingTop: "45%",
               position: "relative",
               marginBottom: "0%",
               width: "100%"
            }}>
            <div style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0
               }}>
               <div style={coverImage}/>
            </div>
         </div>

            <div className={style.blogContent} dangerouslySetInnerHTML={{
                  __html: html
               }}/>
      </div>
   </div>

   </div>}
   </Spring>
   )
}

export const pageQuery = graphql `
  query($path: /String!) {
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
