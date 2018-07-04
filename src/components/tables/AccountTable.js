import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { getTransactions } from '../../actions';
import HeadOne from '../base/HeadOne';
import HeadFour from '../base/HeadFour';
import { Flexcolumn, Flexrow } from '../base/FlexGrid';
import Card from '../base/Card'


class AccountTable extends Component {
  componentDidMount = () => this.props.getTransactions();

  transactionRender = (transactions) =>
    transactions.map(trans => <Card key={trans.id} trans={trans}/>)

  render() {
    const { transactions, loading, fetched, account } = this.props;

    if (!fetched && loading) {
      return <div>loading...</div>
    }

    return (
      <div>
        <HeadOne text={account.name} />
        <Flexrow paddTop='5em' paddBtm='1em'>
          <Flexcolumn size={2}>
            <div>£{parseFloat(account.total_sent ).toFixed(2)}</div>
            <div>total sent</div>
          </Flexcolumn>
          <Flexcolumn size={2}>
            <Progress
              type="circle"
              width={50}
              status="success"
              percent={account.total_sent / 18000 * 100}
              strokeWidth={25}
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
          </Flexcolumn>
          <Flexcolumn size={2}>
            <div>£{parseFloat(account.left_available).toFixed(2)}</div>
            <div>left available</div>
          </Flexcolumn>
        </Flexrow>
        <HeadFour text='Transactions' />
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