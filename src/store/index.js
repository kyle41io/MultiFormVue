import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: {
    info: {
      name: "",
      dob: "",
      city: "",
      positions: [],
      description: "",
      avatar: "",
    },
    companies: [
      {
        companyName: "",
        position: "",
        period: { startDate: "", endDate: "" },
        description: "",
      },
    ],
    confirmInfo: { reasonToApply: "", desiredSalary: 0 },
  },
};

const store = new Vuex.Store(storeData);
export default store;
