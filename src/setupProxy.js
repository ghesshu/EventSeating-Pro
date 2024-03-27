const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy requests to the API server
  app.use(
    "/api", // Specify the path you want to proxy
    createProxyMiddleware({
      target: "http://localhost:3000", // Replace with the URL of your API server
      changeOrigin: true, // Needed for virtual hosted sites
    })
  );
};
