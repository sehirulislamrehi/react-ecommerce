
import cartReducer from "./cart"
import profileInvoice from "./profileInvoice";

import { combineReducers } from 'redux'

const allReducer = combineReducers({
     cart : cartReducer,
     profileInvoice : profileInvoice,
})

export default allReducer;