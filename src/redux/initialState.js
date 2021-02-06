import {clone} from '@core/utils'
import {defaultStyles} from "@/constants";

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
 return state ? normalize(state) : clone(defaultState)
}