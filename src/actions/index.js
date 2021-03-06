import { FETCH_TRANSACTIONS, SEND_MONEY, FETCH_ACCOUNT, HAND_FAILURE } from './types';
import api from '../api';

export const fetchTransactions = (data) => ({
  type: FETCH_TRANSACTIONS,
  payload: data
});

export const fetchAccount = (data) => ({
  type: FETCH_ACCOUNT,
  payload: data
});

export const sendMoney = (data) => ({
  type: SEND_MONEY,
  payload: data
});

export const handleFailure = error => {
  return {
    type: HAND_FAILURE,
    error
  }
}

export const getTransactions = () => dispatch =>
 api.transactions.getall().then(data => {
  dispatch(fetchTransactions(data)); 
 });

 export const getAccount = () => dispatch =>
 api.account.getAccount().then(data => {
  dispatch(fetchAccount(data)); 
 });

export const postTransaction = (data, update) => dispatch => 
 api.transactions.add(data).then(res => {
  dispatch(getTransactions());
  dispatch(updateAccount(update)); 
 }).catch(error => dispatch(handleFailure(error)))


 export const updateAccount = (data) => dispatch => 
 api.account.updateData(data).then(res => {
  dispatch(getAccount()); 
 }).catch(error => dispatch(handleFailure(error)))

