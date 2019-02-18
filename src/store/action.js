export default {
  nextItem ({ commit, state }, answerid) {
    commit('add_answer', answerid)
    if (state.itemNum < state.itemDetail.length) {
      commit('add_itemNum')
    }
  },
  init ({ commit }) {
    commit('init')
  }
}
