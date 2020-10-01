const { createProxyMiddleware } = require('http-proxy-middleware');
let proxy = 'http://localhost:5000';
const SERVER_URL = process.env.REACT_APP_SERVER_URL
if (process.env.REACT_APP_PROXY_URL != undefined) {
  console.log(process.env.REACT_APP_PROXY_URL);
  proxy = process.env.REACT_APP_PROXY_URL;
}

const pathToRrewriteLabel = `^/${SERVER_URL}/`;
const pathRewrite = {};
pathRewrite[pathToRrewriteLabel] = '';
module.exports = function (app) {
  app.use(
    '/server',
    createProxyMiddleware({
      target: proxy,
      changeOrigin: true,
      pathRewrite,
    })
  )
}
