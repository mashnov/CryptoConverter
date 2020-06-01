<template>
  <div class="converter-total">
    <div class="converter-total__total">
      {{ currencyFromValue }} <b>{{ currencyFrom.title }}</b> = {{ totalValue }} <b>{{ currencyTo.title }}</b>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ConverterTotal',
    props: {
      currencyFromValue: {
        type: Number,
        default: 0,
      },
      currencyFrom: {
        type: Object,
        default: () => ({}),
      },
      currencyTo: {
        type: Object,
        default: () => ({}),
      },
      totalValue: {
        type: String,
        default: '0',
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/color.scss';

  .converter-total {
    display: block;
    width: 100%;
    padding: 20px 0;
  }
  .converter-total__total {
    display: block;
    text-align: center;
    border-radius: 3px;
    padding: 10px;
    background-color: $converter-block-background;
    word-break: break-word;
  }
</style>
