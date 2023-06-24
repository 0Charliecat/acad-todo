import { createStore } from 'vuex'
// Create a new store instance.
export default createStore({
    state () {
      return {
        todos: []
      }
    },
    mutations: {
      populate (state, todos) {
        state.todos.length = 0
        todos.forEach(e=> {
          state.todos.push(e)
        })
      },
      flip (state, id) {
          state.todos = state.todos.map(e=> { 
              if (e.$id===id) {
                e.done = !e.done;
                SendUpdatedToDo(e)
              }
              return e
          })
      },
      put (state, data) {
        state.todos.push(data)
      }
    },
    getters: {
      done (state) {
        return state.todos.filter(todo => todo.done)
      },
      undone (state) {
          return state.todos.filter(todo => !todo.done)
      },
      doneCount (state, getters) {
          return getters.done.length
      },
      undoneCount (state, getters) {
          return getters.undone.length
      },
      count (state) {
          return state.todos
      },
      
    }
})