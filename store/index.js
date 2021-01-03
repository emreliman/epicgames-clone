import Vue from 'vue';
import Vuex from 'vuex'
import firebase from 'firebase/app';
require('firebase/auth')


Vue.use(Vuex);
export const state =()=>({
     type:0,
     counter:0,
    selected: false,
    authuser:null,
    
      itemss: [],
        newitem:[]
    });
  
    export const getters = {
      getauser(state) {
        console.log("getters'da")
        return state.authuser;
      }
    };



export const mutations={
    onClickm(state){
        state.selected=!state.selected
    },
    changeType1(state){
         if(state.counter%2==0){
        state.type=1;
        state.counter++;
         }
         else{
             state.type=0;
             state.counter=0;
         }
    },
    changeType2(state){
        if(state.counter%2==0){
        state.type=2;
        state.counter++
        }
        else{
            state.type=0;
            state.counter=0;
        }

    },
    setItems( state,items) {
       state.newitem=items.newitem;
       state.itemss=items.itemss
      console.log("mutation'a giriyor");


    },
    // mUpdateUser(state,user){
    //   state.authuser=user;
    //   console.log('burdayım');
    // }
    
};
export  const actions={
    toggleSelected({commit}){
        commit('onClickm')

    },
    updatetype1({commit}){
        commit('changeType1')

    },
    updatetype2({commit}){
        commit('changeType2')

    },
    aUpdateUser({commit},user){
      state.authuser=user;
        console.log(state.authuser);
        
   
     
    },
    setItems({ state, commit },items) {
       
      console.log("action a giriyor.");
      commit('setItems',items)
    }
    
};




