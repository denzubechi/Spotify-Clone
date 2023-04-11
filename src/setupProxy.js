const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://aa-52yv.onrender.com',
      changeOrigin: true,
    })
  );
};