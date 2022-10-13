import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
require("firebase/auth");

Vue.use(Vuex);
export const state = () => ({
  type: 0,
  counter: 0,
  selected: false,
  authuser: null,
  basket: [],

  itemss: [],
  newitem: []
});

export const getters = {
  getauser(state) {
    return state.authuser;
  }
};

export const mutations = {
  onClickm(state) {
    state.selected = !state.selected;
  },
  changeType1(state) {
    if (state.counter % 2 == 0) {
      state.type = 1;
      state.counter++;
    } else {
      state.type = 0;
      state.counter = 0;
    }
  },
  changeType2(state) {
    if (state.counter % 2 == 0) {
      state.type = 2;
      state.counter++;
    } else {
      state.type = 0;
      state.counter = 0;
    }
  },
  setItems(state, items) {
    state.newitem = items.newitem;
    state.itemss = items.itemss;
    console.log("mutation'a giriyor");
  },
  msBoşalt(state) {
    let uzunluk = state.basket.length;
    for (let index = 0; index < uzunluk; index++) {
      state.basket.pop();
    }
  },
  mSepeteEkle(state, item) {
    if (state.basket.length === 0) state.basket.push(item);
    else {
      if (!!state.basket.find(obje => obje.name === item.name)) {
      } else {
        state.basket.push(item);
      }
    }

    console.log(state.basket);
  }
  // mUpdateUser(state,user){
  //   state.authuser=user;
  //   console.log('burdayım');
  // }
};
export const actions = {
  toggleSelected({ commit }) {
    commit("onClickm");
  },
  updatetype1({ commit }) {
    commit("changeType1");
  },
  updatetype2({ commit }) {
    commit("changeType2");
  },
  aUpdateUser({ commit }, user) {
    state.authuser = user;
  },
  setItems({ state, commit }, items) {
    commit("setItems", items);
  },
  aSepeteEkle({ commit }, item) {
    commit("mSepeteEkle", item);
  },
  sepetiBoşalt({ commit }) {
    commit("msBoşalt");
  }
};
