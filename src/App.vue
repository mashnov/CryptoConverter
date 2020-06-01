<template>
  <div id="app">
    <Navigation />
    <div class="content">
      <Converter />
    </div>
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation/Navigation';
  import Converter from './views/Converter';

  export default {
    name: 'App',
    components: {
      Navigation,
      Converter,
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto', sans-serif;
  }
</style>

<style lang="scss" scoped>
  .content {
    position: relative;
    display: block;
    min-height: calc(100vh - 100px);
    max-width: 1140px;
    margin: 0 auto 20px auto;
    padding: 80px 10px 0 10px;
  }
</style>
