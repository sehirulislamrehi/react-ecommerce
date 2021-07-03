
import cartReducer from "./cart"
import { combineReducers } from 'redux'

const allReducer = combineReducers({
     cart : cartReducer
})

export default allReducer;