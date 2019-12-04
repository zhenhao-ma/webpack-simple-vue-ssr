import { createApp } from './app'

// client-specific bootstrapping logic...

const { app, router } = createApp({state: window.__INITIAL_STATE__});

// this assumes App.vue template root element has `id="app"`
router.onReady(() => {
  app.$mount('#app');
});
