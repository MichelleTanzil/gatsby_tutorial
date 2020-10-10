/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "@janedoe",
    data: ["item1", "item2"],
    person: { name: "Michelle", age: "30" },
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`],
}
