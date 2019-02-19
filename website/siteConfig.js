const repos = require('./data/repos');
const libraries = require('./data/libraries');
const community = require('./data/community');
const algorithms = require('./data/algorithms');
const languages = require('./data/languages');

const siteConfig = {
  title: 'All ▲lgorithms',
  tagline: 'Making algorithms easier for everyone',
  url: 'https://allalgorithms.com',
  baseUrl: '/',

  projectName: 'algorithms',
  organizationName: 'AllAlgorithms',

  headerLinks: [
    {doc: 'dbscan', label: 'Algorithms'},
    {page: 'categories', label: 'Categories'},
    {page: 'libraries', label: 'Libraries'},
    {blog: true, label: 'Blog'},
    { search: true }
  ],

  languages,
  repos,
  libraries,
  community,
  algorithms,

  /* path to images for header/footer */
  headerIcon: 'img/algorithms-white.svg',
  footerIcon: 'img/algorithms-white.png',
  favicon: 'img/agorithms.png',

  /* Colors for website */
  colors: {
    primaryColor: '#61231d',
    secondaryColor: '#61231d',
  },

  copyright: `Copyright © ${new Date().getFullYear()} The All ▲lgorithms Project.`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/algorithms-white.png',
  twitterImage: 'alalgorithms-white.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

    repoUrl: 'https://github.com/allalgorithms/algorithms',
    githubUrl: 'https://github.com/allalgorithms/',

  algolia: {
    apiKey: '033c9494cdabd6c7380e930bd8969da0',
    indexName: 'allalgorithms',
    algoliaOptions: {} ,
    placeholder: 'Search'
  },
};

module.exports = siteConfig;
