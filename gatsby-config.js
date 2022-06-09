module.exports = {
  siteMetadata: {
    title: `prosperous`,
    siteUrl: `https://www.yourdomain.tld`,
    backendUrl: 'https://prosper.classyladyshop.com',

  },
  plugins: [
    {

      resolve: 'gatsby-source-wordpress',
      options: {
        url: "https://prosper.classyladyshop.com/graphql"
      }
    }, "gatsby-plugin-sass", "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    }]
};