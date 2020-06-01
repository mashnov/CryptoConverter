<template>
  <div class="converter-body">
    <div class="converter-body__column">
      <div class="converter-body__cost">
        <template v-if="currencyFromIsNotUSD">
          1 <b>{{ currencyFrom.title }}</b> = {{ currencyFrom.cost }} <b>{{ defaultCurrency.title }}</b>
        </template>
        <template v-else>
          -
        </template>
      </div>
      <div class="converter-body__count">
        <Input
          type="number"
          min="1"
          step="0.1"
          :label="labelText"
          :value="currencyFromValueString"
          placeholder="Введите сумму"
          @input="setFromValue"
        />
      </div>
    </div>
    <div class="converter-body__column">
      <div class="converter-body__cost">
        <template v-if="currencyToIsNotUSD">
          1 <b>{{ currencyTo.title }}</b> = {{ currencyTo.cost }} <b>{{ defaultCurrency.title }}</b>
        </template>
        <template v-else>
          -
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from '~/components/Shared/Input';

  export default {
    name: 'ConverterBody',
    components: {
      Input,
    },
    props: {
      currencyFrom: {
        type: Object,
        default: () => ({}),
      },
      currencyTo: {
        type: Object,
        default: () => ({}),
      },
      currencyFromValue: {
        type: Number,
        default: 0,
      },
      currencyToValue: {
        type: Number,
        default: 0,
      },
      defaultCurrency: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      currencyFromValueString() {
        const { currencyFromValue } = this;
        return currencyFromValue.toString();
      },
      currencyFromIsNotUSD() {
        const { currencyFrom } = this;
        return currencyFrom.title !== 'USD';
      },
      currencyToIsNotUSD() {
        const { currencyTo } = this;
        return currencyTo.title !== 'USD';
      },
      labelText() {
        const { currencyFrom } = this;
        return `Введите количество ${currencyFrom.title}`;
      },
    },
    methods: {
      setFromValue(string) {
        const value = parseFloat(string);
        this.$emit('set-currency-from-value', value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/color.scss';

  .converter-body {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    padding: 20px 0;
  }
  .converter-body__column {
    display: block;
    width: calc(100% / 2 - 10px);
  }
  .converter-body__column:first-child {
    margin-right: 20px;
  }
  .converter-body__cost {
    text-align: center;
    border-radius: 3px;
    padding: 10px;
    background-color: $converter-block-background;
  }
  .converter-body__count {
    margin: 20px 0;
  }
</style>
