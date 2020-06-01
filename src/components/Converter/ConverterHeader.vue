<template>
  <div class="converter-header">
    <div class="converter-header__column">
      <Select
        label="Валюта 1"
        :value="currencyFromValue"
        :options="currencyFromValueOptions"
        @input="changeFromValue"
      />
    </div>
    <div class="converter-header__column">
      <Select
        label="Валюта 2"
        :value="currencyToValue"
        :options="currencyToValueOptions"
        @input="changeToValue"
      />
    </div>
  </div>
</template>

<script>
  import find from 'lodash/find';

  import Select from '~/components/Shared/Select';

  export default {
    name: 'ConverterHeader',
    components: {
      Select,
    },
    props: {
      currencies: {
        type: Array,
        default: () => ([]),
      },
      currencyFrom: {
        type: Object,
        default: () => ({}),
      },
      currencyTo: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      currencyFromValue() {
        const { currencyFrom } = this;
        return currencyFrom ? currencyFrom.title : '';
      },
      currencyToValue() {
        const { currencyTo } = this;
        return currencyTo ? currencyTo.title : '';
      },
      currencyFromValueOptions() {
        const { currencies, currencyToValue } = this;
        return currencies.map((item) => {
          return {
            title: item.title,
            disabled: item.title === currencyToValue,
          };
        });
      },
      currencyToValueOptions() {
        const { currencies, currencyFromValue } = this;
        return currencies.map((item) => {
          return {
            title: item.title,
            disabled: item.title === currencyFromValue,
          };
        });
      },
    },
    methods: {
      changeFromValue(value) {
        const valueObj = this.getValueObj(value);
        this.$emit('set-currency-from', valueObj);
      },
      changeToValue(value) {
        const valueObj = this.getValueObj(value);
        this.$emit('set-currency-to', valueObj);
      },
      getValueObj(value) {
        const { currencies } = this;
        return find(currencies, { title: value });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/color.scss';

  .converter-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding: 20px 0;
  }
  .converter-header__column {
    display: block;
    width: 50%;
    padding: 0 10px;
  }
</style>
