import { CONVERTER } from '~/store/types';
import { getCurrencyCost, getChartsData } from '~/store/helpers';

export default {
  [CONVERTER.GET_CURRENCY_FROM]: ({ currencyFrom }) => currencyFrom,
  [CONVERTER.GET_CURRENCY_TO]: ({ currencyTo }) => currencyTo,
  [CONVERTER.GET_CURRENCY_FROM_VALUE]: ({ currencyFromValue }) => currencyFromValue,
  [CONVERTER.GET_CURRENCIES]: ({ currencies }) => currencies,
  [CONVERTER.GET_DEFAULT_CURRENCY]: ({ defaultCurrency }) => defaultCurrency,
  [CONVERTER.GET_CHART_DATA]: (state) => {
    const { currencyFrom, currencyTo, defaultCurrency, chartLabels } = state;
    return getChartsData({ currencyFrom, currencyTo, defaultCurrency, chartLabels });
  },
  [CONVERTER.GET_TOTAL_VALUE]: (state) => {
    const { currencyFromValue, currencyFrom, currencyTo } = state;
    return getCurrencyCost({ currencyFromValue, currencyFrom, currencyTo });
  },
};
