// craco.config.js
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          url: require.resolve("url/"),
        },
      },
    },
  },
};
