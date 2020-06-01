import { CONVERTER } from '~/store/types';

export default {
  [CONVERTER.MUTATE_CURRENCY_FROM]: (state, currencyObj) => {
    state.currencyFrom = currencyObj;
  },
  [CONVERTER.MUTATE_CURRENCY_TO]: (state, currencyObj) => {
    state.currencyTo = currencyObj;
  },
  [CONVERTER.MUTATE_CURRENCY_FROM_VALUE]: (state, value) => {
    state.currencyFromValue = value;
  },
};
