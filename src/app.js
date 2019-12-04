import Vue from 'vue';
import App from './App.vue';

import Vuex from 'vuex';
import Meta from 'vue-meta'
import routerFactory from './router';
import storeFactory from './store';

Vue.use(Vuex);
Vue.use(Meta, {
  ssrAppId: 1 // see https://vue-meta.nuxtjs.org/guide/caveats.html#duplicated-tags-after-hydration-with-ssr
});

// export a factory function for creating fresh app, router and store
// instances
export function createApp () {
  const router = routerFactory();
  const store = storeFactory();
  const app = new Vue({
    // the root instance simply renders the App component.
    store,
    router,
    render: h => h(App),
  });
  return { app, router, store }
}

// const Vue = require('vue');
// const server = require('express')();
// const renderer = require('vue-server-renderer').createRenderer({
//   template: require('fs').readFileSync('../index.html', 'utf-8')
// });
//
// const context = {
//   title: 'Vue SSR Simple Webpack',
//   meta: `
//     <meta charset="utf-8">
//   `
// };
//
// server.get('*', (req, res) => {
//   const app = new Vue({
//     el: '#app',
//     render: h => h(App),
//     data: {
//       url: req.url
//     }
//   });
//   renderer.renderToString(app, context,(err, html) => {
//     if (err) {
//       res.status(500).end('Internal Server Error');
//       return
//     }
//     res.end(html)
//   })
// });
//
// server.listen(8080);
