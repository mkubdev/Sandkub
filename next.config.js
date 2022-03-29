// const frontmatterPlugin = require('./lib/frontmatter')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // To use frontmatter, add the plugin to the options
    // remarkPlugins: [frontmatterPlugin],
    remarkPlugins: [],
    rehypePlugins: [],

    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  }
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  swcMinify: true,
  resolve: {
    fallback: {
      fs: false,
    },
  },
  images: {
    domains: [
      '',
    ],
  },async redirects() {
    return [
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/mkubdev',
        permanent: true,
        basePath: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/mkubdev',
        permanent: true,
        basePath: false,
      },
    ]
  },
  // target: 'serverless'
})

