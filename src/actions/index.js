import { FETCH_TRANSACTIONS, SEND_MONEY } from './types';
import api from '../api';

export const fetchTransactions = (data) => ({
  type: FETCH_TRANSACTIONS,
  payload: data
});

export const sendMoney = (data) => ({
  type: SEND_MONEY,
  payload: data
});

export const getTransactions = () => dispatch =>
 api.transactions.getall().then(data => {
  dispatch(fetchTransactions(data)); 
 });

export const postTransaction = () => dispatch => 
 api.transactions.add().then(user => {
  dispatch(sendMoney(user)); 
 });