import { StoreType } from '@/types/store/store'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'

export default createStore<StoreType>({
  modules: {
    user
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
