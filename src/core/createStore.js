export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, '__INIT__')
  let listeners = []

  return {
    subscribe(fn) {
      listeners.push(fn)
      return () => {
        listeners = listeners.filter(l => l !== fn)
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach(listener => listener(state))
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    }
  }
}