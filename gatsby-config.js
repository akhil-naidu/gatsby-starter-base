require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Leewardslope",
    description: "A community for Cyber Security experts and a Starting node for beginners ",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: ["@reflexjs/gatsby-theme-base"],
}
