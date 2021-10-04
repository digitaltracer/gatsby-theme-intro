module.exports = {
  siteMetadata: {
    description: "Personal page of Adarsh N B",
    locale: "en",
    title: "Adarsh N B",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
