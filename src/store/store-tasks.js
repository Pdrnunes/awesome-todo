// Data goes here:
const state = {
  /* Refactoring tasks property into an object structure*/
  tasks: {
    'ID1': {
      name: 'Go to Heaven',
      completed: false,
      dueDate: '2021/11/04',
      dueTime: '17:30'
    },
    'ID2': {
      name: 'Go to Hell',
      completed: false,
      dueDate: '2021/11/25',
      dueTime: '13:10'
    },
    'ID3': {
      name: 'Go to Purgatory',
      completed: false,
      dueDate: '2021/12/01',
      dueTime: '08:00'
    }
  }
  // tasks: [
  //   {
  //     id: 1,
  //     name: 'Go to Heaven',
  //     completed: false,
  //     dueDate: '2021/11/04',
  //     dueTime: '17:30'
  //   },
  //   {
  //     id: 2,
  //     name: 'Go to Hell',
  //     completed: false,
  //     dueDate: '2021/11/25',
  //     dueTime: '13:10'
  //   },
  //   {
  //     id: 3,
  //     name: 'Go to Purgatory',
  //     completed: false,
  //     dueDate: '2021/12/01',
  //     dueTime: '08:00'
  //   },
  // ]
}

// Method that changes the state
const mutations = {
  updateTask (state, payload) {
    console.log('payload from mutation: ', payload);
    // object assign: copies the properties of one object to another:
    Object.assign(state.tasks[payload.id], payload.updates) //first parameter is the object that we're assigning to. 
  }
}
// getters basically returns something from the state
const getters = {

  tasks: (state) => {
    return state.tasks
  }
}

// Can be used to call mutations
const actions = {
  // actions expects an object:
  // the commit function will call the mutation
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
    // must be passed the name of the mutation function and the payload
  }
}
// namespaced - allows the app to have multiple store modules
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}