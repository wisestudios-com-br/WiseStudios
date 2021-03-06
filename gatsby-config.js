module.exports = {
  siteMetadata: {
    title: 'WISE Studios',
    author: 'JGabriel Gruber',
    description: 'Desenvolvedora de websites',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#121219',
        theme_color: '#70362A',
        display: 'minimal-ui',
        icon: 'src/images/ws-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
  pathPrefix: '/WiseStudios',
}
