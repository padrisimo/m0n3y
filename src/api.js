import axios from 'axios';

export default {
  transactions: {
    add: (data) =>
      axios.post('http://localhost:5000/transactions', data).then(res => res.data),
    getall: () =>
      axios.get('http://localhost:5000/transactions').then(res => res.data)

  }
}