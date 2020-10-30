import serialize from 'serialize-javascript';

export default ({ body, title, store }) => (`
  <!DOCTYLE html>
  <html>
    <head>
    <link rel="icon" href="https://vvikota-songbird.netlify.app/favicon.ico">
    <link rel="apple-touch-icon" href="https://vvikota-songbird.netlify.app/logo192.png">
      <title>${title}</title>
    </head>

    <body>
      <div id="root">${body}</div>
    </body>

    <script src="/assets/bundle.js"></script>
    <script>window.__PRELOADED_STATE__= ${serialize(store.getState())}</script>
  </html>
`);
