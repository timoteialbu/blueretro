import { createStore } from 'redux'
import reducer from '../reducers'
import { getItems } from '../reducers/getItems'

const initialState = {
  items: getItems(),
  selected: null
}

export const store = createStore(reducer, initialState)
