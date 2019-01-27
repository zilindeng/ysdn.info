module.exports = {
   siteMetadata: {
      title: 'ysdn.info'
   },
   plugins: [
      `gatsby-transformer-sharp`, // Transformer-Sharp MUST GO BEFORE Plugin-Sharp
      `gatsby-plugin-sharp`, // Transformer-Sharp + Plugin-Sharp MUST GO AT THE TOP
      'gatsby-plugin-less',
      `gatsby-plugin-offline`,
      'gatsby-plugin-react-helmet', {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
         }
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/src/content/graduates`,
            name: "graduates"
         },
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
            plugins: [
               {
               resolve:`gatsby-remark-relative-images-v2`,
               options: {
                  name: 'assets',
               }
               },
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 1080,
               },
             },
           ],
         },
       },
        {
         resolve: `gatsby-plugin-netlify-cms`,
         options: {
            modulePath: `${__dirname}/src/cms/cms.js`
         },
      },
   ],
}
