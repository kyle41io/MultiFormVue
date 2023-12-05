import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: { info: {}, companies: [{}], reasonToApply: "", desiredSalary: 0 },
};

const store = new Vuex.Store(storeData);
export default store;
