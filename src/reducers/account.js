import { FETCH_ACCOUNT } from '../actions/types';

const account = (state = {
  data:{},
  loading: true,
  fetched: false
}, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return {data: action.payload, loading: false, fetched: true};
    default:
      return state;
  }
}

export default account;