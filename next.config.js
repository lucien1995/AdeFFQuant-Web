const isGithubPages = process.env.GITHUB_ACTIONS || false;

module.exports = {
  output: 'export',
  basePath: isGithubPages ? '/AdeFFQuant-Web' : '',
  images: {
    unoptimized: true,
  },
};
