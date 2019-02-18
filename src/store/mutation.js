export default {
  add_itemNum (state) {
    state.itemNum++
  },
  add_answer (state, answer) {
    state.answerid.push(answer)
  },
  init (state) {
    state.itemNum = 1
    state.answerid = []
  }
}
