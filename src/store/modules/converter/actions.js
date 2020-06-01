import { CONVERTER } from '~/store/types';

export default {
  [CONVERTER.SET_CURRENCY_FROM]({ commit }, currencyObj) {
    commit(CONVERTER.MUTATE_CURRENCY_FROM, currencyObj);
  },
  [CONVERTER.SET_CURRENCY_TO]({ commit }, currencyObj) {
    commit(CONVERTER.MUTATE_CURRENCY_TO, currencyObj);
  },
  [CONVERTER.SET_CURRENCY_FROM_VALUE]({ commit }, value) {
    commit(CONVERTER.MUTATE_CURRENCY_FROM_VALUE, value);
  },
};
