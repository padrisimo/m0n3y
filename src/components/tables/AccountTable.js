import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { getTransactions } from '../../actions';


class AccountTable extends Component {
  componentDidMount = () => this.props.getTransactions();

  transactionRender = (transactions) =>
    transactions.map(trans => <div key={trans.id}>
      <span>
        <div>{trans.name}</div>
        <div>{trans.email}</div>
      </span>
      <span>{trans.amount}</span>
    </div>)

  render() {
    const { transactions, loading, fetched, account } = this.props;

    if (!fetched && loading) {
      return <div>loading...</div>
    }

    return (
      <div>
        <h1>{account.name}</h1>
        <div>
          <div>{account.total_sent}</div>
          <div>total sent</div>
        </div>
        <div>
          <Progress
            type="circle"
            width={50}
            status="success"
            percent={account.total_sent / 18000 * 100}
            strokeWidth={20}
            theme={
              {
                success: {
                  symbol: " ",
                  trailColor: 'lightgrey',
                  color: '#fbc630'
                }
              }
            }
          />
        </div>
        <div>
          <div>{account.left_available}</div>
          <div>left available</div>
          ----------------
        </div>
        {this.transactionRender(transactions)}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    transactions: state.transactions.data,
    fetched: state.transactions.fetched,
    loading: state.transactions.loading
  }
)

export default connect(mapStateToProps, { getTransactions })(AccountTable);