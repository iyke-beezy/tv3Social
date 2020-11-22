import { combineReducers } from 'redux'
import adminReducer from './Admin/admin.Reducer'

export default combineReducers({
    admin: adminReducer,
})