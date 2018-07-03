import { FETCH_ACCOUNT, HAND_FAILURE } from '../actions/types';

const account = (state = {
  data:{},
  loading: true,
  fetched: false,
  error: null
}, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return {data: action.payload, loading: false, fetched: true};
    case HAND_FAILURE:
      return {...state, loading: false, fetched: false, error: action.payload}
    default:
      return state;
  }
}

export default account;