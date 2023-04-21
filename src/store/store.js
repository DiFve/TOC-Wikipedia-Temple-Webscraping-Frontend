import { createStore } from "vuex";
import axios from "axios";
import config from "../../config.json";

export default createStore({
  state() {
    return {
      allList: null,
    };
  },
  mutations: {
    SET_DATA(state, list) {
      state.allList = list;
    },
  },
  actions: {
    async fetchData({ commit, state }) {
      if (!state.allList) {
        const res = await axios.get(config.apiURL);
        commit("SET_DATA", res.data.result);
      }
      //   else {
      //     return Promise.resolve(); // Return a resolved promise if data is already available
      //   }
    },
  },
});
