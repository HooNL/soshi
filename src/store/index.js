import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({


  state: {
    log: false,
    naaam: '',
    achter: '',
    werk: '',
    age: +12,
    ervar: 0,
    rating: 0,
    jam: '' 
  },


  
  mutations: {
    PLUS(state, payload){
      state.rating += payload;
    },
    MINU(state, payload){
      state.rating -= payload;
    },
    REST(state){
      state.rating = 0;
    },

    // Voor naam en achternaam
    MET(state, payload){
      state.naaam += payload;
      //state.achter += payload;
    }


  },


  actions: {
    jame(context,value){
      context.commit('PLUS', value)
    },
    minn(context,value){
      context.commit('MINU', value)
    },
    khal(context){
      context.commit('REST')
    },

    
  },



  modules: {
  }
})
