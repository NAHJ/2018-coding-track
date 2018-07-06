module.exports = {
  siteMetadata: {
    title: "NAHJ 2018 Coding Track",
    author: "Carla Astudillo + Erik Reyna",
    authorLink: "https://github.com/erikreyna",
    disqus: false // put your disqus ID here
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs", "gatsby-remark-copy-linked-files"]
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass"
  ]
};
