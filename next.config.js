// next.config.js (ESM 写法)
const isGithubPages = process.env.GITHUB_ACTIONS || false;

export default {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};