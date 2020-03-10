import { combineReducers } from 'redux'
import { countReducer } from './countReducer'

export default combineReducers({
    reducerGue: countReducer
})