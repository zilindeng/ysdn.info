import React from "react"
import GraduateLink from "../components/graduate-link"
import Layout from '../components/layout'

import style from './styles.module.less'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges, totalCount, },
  },
}) => {
  const Y2019 = edges
    .filter(edge => edge.node.frontmatter.year === '2019') // You can filter your posts based on some criteria
    .map(edge => <GraduateLink key={edge.node.id} post={edge.node} />)

  const Y2018 = edges
    .filter(edge => edge.node.frontmatter.year === '2018') // You can filter your posts based on some criteria
    .map(edge => <GraduateLink key={edge.node.id} post={edge.node} />)

  const Y2017 = edges
    .filter(edge => edge.node.frontmatter.year === '2017') // You can filter your posts based on some criteria
    .map(edge => <GraduateLink key={edge.node.id} post={edge.node} />)  

  const Y2016 = edges
    .filter(edge => edge.node.frontmatter.year === '2016') // You can filter your posts based on some criteria
    .map(edge => <GraduateLink key={edge.node.id} post={edge.node} />)

  const Total = totalCount

  return <Layout>
     <div className={style.wiki}>
      <p>York/Sheridan Design was a four-year university degree program delivered jointly by York University located in Toronto, Ontario and Sheridan College in Oakville, Ontario, from 1999 to 2018. 
      This was the first and largest program in Ontario that offered the Bachelor of Design Specialized Honours degree.<sup>1</sup> <br/><br/> The joint program has been <i>discontinued.</i>
      </p>
      <p>Beginning with the class entering in 2019, four-year design students will enroll in a new Bachelor of Design offered by York University, one which is geared for the future of the profession. <sup>2</sup></p>
      </div>

      <div className={style.headline}><h2>Graduates <sup>({Total})</sup></h2></div>
            <div className={style.wrapper}>
               <ul className={style.unorderedList}>
                  <div className={style.header}>
                    / 2019
                    <sup>({Y2019.length})</sup>
                  </div>
                  {Y2019}
               </ul>
               <ul className={style.unorderedList}>
                  <div className={style.header}>
                    / 2018
                    <sup>({Y2018.length})</sup>
                  </div>
                  {Y2018}
               </ul>
               <ul className={style.unorderedList}>
                  <div className={style.header}>
                    / 2017
                    <sup>({Y2017.length})</sup>
                  </div>
                  {Y2017}
               </ul>
               <ul className={style.unorderedList}>
                  <div className={style.header}>
                    / 2016
                    <sup>({Y2016.length})</sup>
                  </div>
                  {Y2016}
               </ul>
               <ul className={style.unorderedList}>
                  <div className={style.header}>
                    / 2015 – 2003
                    <sup>(?)</sup>
                  </div>
                  <i>Work in Progress</i>
               </ul>
            </div>

            <div className={style.headline}>
      Joan and Martin Goldfarb Centre for Fine Arts <br/>
      FL3 / FL4 <br/>
      1999 — 2004.
      </div>

      <br/>
      <br/>

      <div className={style.headline}>
      Victor Phillip Dahdaleh <sup>né Technology Enhanced Learning Building (TEL)</sup> <br/>
      FL3 / FL4 <br/>
      1999 — 2004.
      </div>

            <div className={style.headline}><small>Last Updated Jan 26, 2019</small></div>
         </Layout> 
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___path] }
      filter: { fileAbsolutePath: {regex : "\/graduates/"} },
   ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            name
            year
            website
          }
        }
      }
    }
  }
`