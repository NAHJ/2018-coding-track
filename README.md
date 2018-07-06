# NAHJ 2018 Coding Track
(bi-weekly on Wednesday/Thursday 7:30pm)

## Getting Started

### Prerequisites

* Node (I recommend using v8.2.0 or higher)
* [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Run Locally

```sh
npm start
```

## Accessing the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Configuration

Set your site's title in `gatsby-config.js`. If you set `disqus` to your ID, it will be used for your comments, set it to `false` and it will be left out. It's currently set to `gatsby-starter-blog`, for the demo, but you can set it to your disqus ID. `author` and `authorLink` aren't currently used for anything, but maybe later.


### Theming

You can quickly load any theme from [bootswatch](https://bootswatch.com/) by editing `src/layouts/index.scss`, and switching out `cosmo` for one of these:

* cosmo
* cerulean
* cyborg
* darkly
* flatly
* journal
* litera
* lumen
* lux
* materia
* minty
* pulse
* sandstone
* simplex
* sketchy
* slate
* solar
* spacelab
* superhero
* united
* yeti

There's 2 lines to change.

You can also comment/uncomment lines in that file to customize exactly what parts of bootstrap are loaded.
