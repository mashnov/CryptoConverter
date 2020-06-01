import Vue from 'vue';
import Vuex from 'vuex';

import converter from '~/store/modules/converter';

const strict = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  strict,
  modules: {
    converter,
  },
});
