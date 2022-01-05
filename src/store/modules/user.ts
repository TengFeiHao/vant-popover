const user = {
  namespaced: true,
  state: {
    token: ''
  },
  actions: {},
  mutations: {
    setToken(state: { token: string }, paylod: string) {
      state.token = paylod
    }
  },
  getters: {}
}

export default user
