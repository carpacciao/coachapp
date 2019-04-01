export const SessionModule = {
  namespaced: true,
  state: {
    logged: false
  },
  mutations: {
    setLog (state, logged) {
      state.logged = logged
    }
  },
  actions: {
    setLog (context, logged) {
      context.commit('setLog', logged)
    }
  },
  getters: {

  }
}
