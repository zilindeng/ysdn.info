import React from "react"
import { Link } from "gatsby"
import { Spring } from 'react-spring'
// import Img from "gatsby-image"

import style from './graduate-link.module.less'

const GraduateLink = ({ post }) => (
     <div className={style.postBlock}>
         <li className={style.listItem}>
            {post.frontmatter.name}
         </li>
      </div>
)

export default GraduateLink
