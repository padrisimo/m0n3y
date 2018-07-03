import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions';


class AccountTable extends Component {
  componentDidMount = () => this.props.getTransactions();

  transactionRender = () => 
    this.props.transactions.map(trans => <div key={trans.id}>
      <span>
        <div>{trans.name}</div>
        <div>{trans.email}</div>
      </span>
      <span>{trans.amount}</span>
    </div>)

  render() {
    const { transactions, fetched } = this.props;

    if(!fetched){
      return <div>loading...</div>
    }

    return (
      <div>
        {this.transactionRender()}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    transactions: state.transactions.data,
    fetched: state.transactions.fetched
  }
)

export default connect(mapStateToProps, { getTransactions })(AccountTable);