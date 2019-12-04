<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <h1>{{ msg }}</h1>
    <h2>Come With</h2>
    <div class="come-with">
      <span>vue-server-renderer</span>
      <span>vuex</span>
      <span>express.js</span>
    </div>
    <div class="come-with">
      <span>vue-router</span>
      <span>vue-meta</span>
      <span>vue-loader</span>
      <span>sass-loader</span>
      <span>axios</span>
    </div>
    <h2>Related Links</h2>
    <div>
      <a href="https://ssr.vuejs.org/">Vue official SSR Guide</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue SSR Simple-Webpack-Template App'
    }
  },
  metaInfo: {
      meta: [
          { charset: 'utf-8' },
      ]
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .come-with {
    span {
      margin: 3px 5px;
    }
  }
</style>
