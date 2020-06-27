require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Leeward",
    description: "A community for Cyber Security experts and a Starting node for beginners ",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    `@reflexjs/gatsby-theme-doc`,
    `@reflexjs/gatsby-theme-library`,
    `@reflexjs/gatsby-theme-tutorial`,
    `@reflexjs/gatsby-theme-styleguide`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reflex`,
        short_name: `Reflex`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
  ],
}
