module.exports = {
    siteMetadata: {
      title: `Belfast CoHousing`,
        siteUrl: `https://www.belfastcohousing.org`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/content/news`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-vanilla-extract`,
      
    ]
}