import { combineReducers } from 'redux'
import { 
  VisibilityFilters, 
  SET_VISIBILITY_FILTER, 
  ADD_ASANA, 
  REMOVE_ASANA 
} from './actions'

const initialState = {
  visibilityFilter : VisibilityFilters.SHOW_ALL,
  asanas : []
}

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
  switch (action.type){
    case SET_VISIBILITY_FILTER:
    return { ...state, ...{ visibilityFilter: action.filter } }
    default:
    return state
  }
}

const asanas = (state = initialState.asanas, action) => {
  switch (action.type){
    case ADD_ASANA:
      return [
        ...state, 
        { name: action.name }
      ]
    case REMOVE_ASANA:
      return state.asanas.filter( (asana, index) => action.index !== index )
    default:
      return state
  }
}

const yogaApp = combineReducers({
  visibilityFilter,
  asanas
})

export default yogaApp

