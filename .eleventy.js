module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('assets');
  return {
    passthroughFileCopy: true,
    dir: {
      output: 'docs',
    },
  };
};
