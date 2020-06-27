require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Leeward",
    description: "A community for Cyber Security experts and a Starting node for beginners ",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leeward`,
        short_name: `Leeward`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `content/images/favicon.png`,
      },
    },
  ],
}
