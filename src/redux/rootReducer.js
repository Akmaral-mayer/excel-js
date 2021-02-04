import {TABLE_RESIZE} from "@/redux/type";

export function rootReducer(state, action) {
  let prevState
  switch (action.type) {
    case TABLE_RESIZE:
      prevState = state.colState || {}
      prevState[action.data.id] = action.data.value
      return {...state, colState: prevState}
    default:
      return state
  }

  // eslint-disable-next-line no-unreachable
  return state
}