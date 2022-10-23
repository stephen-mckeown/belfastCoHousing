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
          path: `${__dirname}/src/content`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-vanilla-extract`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-s3`,
        options: {
          bucketName: "www.belfastcohousing.org",
          protocol: "https",
          hostname: "www.belfastcohousing.org",
        },
      },
    ]
}