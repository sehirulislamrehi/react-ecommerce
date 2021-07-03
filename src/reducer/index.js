
import cartReducer from "./cart"
import profileInvoice from "./profileInvoice";

import { combineReducers } from 'redux'

const allReducer = combineReducers({
     cart : cartReducer,
     removeProfileInvoice : profileInvoice,
})

export default allReducer;