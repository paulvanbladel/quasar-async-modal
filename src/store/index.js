import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    // plugins: [createPersistedState({
    //   storage: window.sessionStorage,
    //   reducer: state => ({ // so provide here the states you want to persist
    //     authentication: {
    //       recoverableLocation: state.authentication.recoverableLocation
    //     }
    //   })
    // })],
    strict: true,
    modules: {
      products
    }
  })
  return Store
}
