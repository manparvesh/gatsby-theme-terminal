module.exports = {
  siteMetadata: {
    name: `gatsby-theme-terminal`,
    description: `A Zero Component theme for developers`,
    keywords: [`gatsby`, `gatsbyjs`, `gatsby-theme`],
    siteUrl: `https://gatsby-theme-terminal.netlify.com`,
    siteImage: `images/terminal-open-graph-image.jpg`,
    lang: `eng`,
    config: {
      sidebarWidth: 260,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [`posts`, `projects`],
      },
    },
  ],
}
