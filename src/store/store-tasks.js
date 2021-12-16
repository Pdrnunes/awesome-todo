// Data goes here:
const state = {
  tasks: [
    {
      id: 1,
      name: 'Go to Heaven',
      completed: false,
      dueDate: '2021/11/04',
      dueTime: '17:30'
    },
    {
      id: 2,
      name: 'Go to Hell',
      completed: false,
      dueDate: '2021/11/25',
      dueTime: '13:10'
    },
    {
      id: 3,
      name: 'Go to Purgatory',
      completed: false,
      dueDate: '2021/12/01',
      dueTime: '08:00'
    },
  ]
}

const mutations = {

}
// getters basically returns something from the state
const getters = {

  tasks: (state) => {
    return state.tasks
  }
}

const actions = {

}
// namespaced - allows the app to have multiple store modules
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}