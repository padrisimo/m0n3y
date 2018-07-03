import { FETCH_TRANSACTIONS } from '../actions/types';

const transactions = (state = {
  data:{},
  loading: true,
  fetched: false
}, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return {data: action.payload, loading: false, fetched: true};
    default:
      return state;
  }
}

export default transactions;