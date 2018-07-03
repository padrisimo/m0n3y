import axios from 'axios';

const URL = 'http://localhost:5000'

export default {
  transactions: {
    add: (data) =>
      axios.post(`${URL}/transactions`, data).then(res => res.data),
    getall: () =>
      axios.get(`${URL}/transactions`).then(res => res.data)

  },
  account: {
    getAccount: () =>
      axios.get(`${URL}/account`).then(res => res.data),
    updateData: data =>
      axios.put(`${URL}/account`, data).then(res => res.data),
  }
}