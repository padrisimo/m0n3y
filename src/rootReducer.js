import { combineReducers } from 'redux';
import transactions from "./reducers/transactions";
import account from "./reducers/account";


export default combineReducers({
  transactions,
  account
});