import * as types from '../Action/actionForContact'

const initialState = { selected: null, masseg: null }

export default function ThisReducerDownloads(state = initialState, action) {
  switch (action.type) {
  case types.MAP_LOADING_START:
    return {...state, masseg: action.masseg} 
  case types.MAP_LOADING_COMPLETE:
    return { ...state, selected: action.resultLoading, masseg: action.masseg }
  case types.MAP_LOADING_ERR:
    return { ...state, masseg: action.masseg }
  default:
    return state
  }
}
