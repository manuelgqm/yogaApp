export const ADD_ASANA = 'ADD_ASANA'
export const REMOVE_ASANA = 'REMOVE_ASANA'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const addAsana = name => ({ type: ADD_ASANA, name })
export const removeAsana = index => ({ type: REMOVE_ASANA, index })
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter })