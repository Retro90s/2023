import type { GatsbyConfig, PluginRef } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `2023`,
    siteTitleAlt: `2023 | True Colors`,
    siteHeadline: `2023 | True Colors`,
    siteUrl: `https://2023-microlens.netlify.app`,
    siteDescription: 'Photos by Long Nhat Nguyen',
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2023`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2023 | True Colors`,
        short_name: `2023`,
        description: `Photos by Long Nhat Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
