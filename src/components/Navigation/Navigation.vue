<template>
  <div class="navigation">
    <div class="navigation__item">
      <ConverterIcon />
    </div>
  </div>
</template>

<script>
  import ConverterIcon from '+/converter.svg';

  export default {
    name: 'Navigation',
    components: {
      ConverterIcon,
    },
  };
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/color.scss';

  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    background: $navigation-background;
    z-index: 1;
  }
  .navigation__item {
    display: block;
    width: 40px;
    height: 40px;
    color: $navigation-font-color;
    margin: 10px;
  }
  .navigation__item svg {
    display: block;
    width: 100%;
  }
</style>
