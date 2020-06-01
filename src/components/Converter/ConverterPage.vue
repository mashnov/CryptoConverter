<template>
  <div class="converter-page">
    <ConverterHeader
      :currencies="currencies"
      :currency-from="currencyFrom"
      :currency-to="currencyTo"
      @set-currency-from="setCurrencyFrom"
      @set-currency-to="setCurrencyTo"
    />
    <ConverterBody
      v-if="bodyIsVisible"
      :currency-from="currencyFrom"
      :currency-to="currencyTo"
      :currency-from-value="currencyFromValue"
      :default-currency="defaultCurrency"
      @set-currency-from-value="setCurrencyFromValue"
    />
    <ConverterTotal
      v-if="totalVisible"
      :currency-from-value="currencyFromValue"
      :currency-from="currencyFrom"
      :currency-to="currencyTo"
      :total-value="totalValue"
    />
    <LineChart
      v-if="bodyIsVisible"
      :chart-data="totalChartData"
      :height="150"
    />
    <ConverterTable
      v-if="bodyIsVisible"
      :currency-from="currencyFrom"
      :currency-to="currencyTo"
      :chart-data="totalChartData"
    />
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { CONVERTER } from '~/store/types';

  import ConverterHeader from '~/components/Converter/ConverterHeader';
  import ConverterBody from '~/components/Converter/ConverterBody';
  import ConverterTotal from '~/components/Converter/ConverterTotal';
  import LineChart from '~/components/Shared/LineChart';
  import ConverterTable from '~/components/Converter/ConverterTable';

  const {
    mapGetters: mapConverterGetters,
    mapActions: mapConverterActions,
  } = createNamespacedHelpers('converter');

  export default {
    name: 'ConverterPage',
    components: {
      ConverterHeader,
      ConverterBody,
      ConverterTotal,
      LineChart,
      ConverterTable,
    },
    computed: {
      ...mapConverterGetters({
        currencyFrom: CONVERTER.GET_CURRENCY_FROM,
        currencyTo: CONVERTER.GET_CURRENCY_TO,
        currencyFromValue: CONVERTER.GET_CURRENCY_FROM_VALUE,
        currencies: CONVERTER.GET_CURRENCIES,
        totalValue: CONVERTER.GET_TOTAL_VALUE,
        defaultCurrency: CONVERTER.GET_DEFAULT_CURRENCY,
        totalChartData: CONVERTER.GET_CHART_DATA,
      }),
      bodyIsVisible() {
        const { currencyFrom, currencyTo } = this;
        const fromTitle = currencyFrom && currencyFrom.title;
        const toTitle = currencyTo && currencyTo.title;
        const currencyToIsNotEqual = fromTitle !== toTitle;
        return currencyFrom && currencyTo && currencyToIsNotEqual;
      },
      totalVisible() {
        const { bodyIsVisible, currencyFromValue, currencyFrom, currencyTo } = this;
        const fromTitle = currencyFrom && currencyFrom.title;
        const toTitle = currencyTo && currencyTo.title;
        const currencyIsDifferent = fromTitle !== toTitle;
        return bodyIsVisible && currencyIsDifferent && currencyFromValue > 0;
      },
    },
    methods: {
      ...mapConverterActions({
        setCurrencyFrom: CONVERTER.SET_CURRENCY_FROM,
        setCurrencyTo: CONVERTER.SET_CURRENCY_TO,
        setCurrencyFromValue: CONVERTER.SET_CURRENCY_FROM_VALUE,
      }),
    },
  };
</script>
