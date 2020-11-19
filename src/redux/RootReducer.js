import {combineReducers} from 'redux'

import authReducer from './reducers/authReducer'
import kitchenProductReducer from './reducers/kitchenProductReducer'



export default combineReducers({
    authReducer,
    kitchenProductReducer
})