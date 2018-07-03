import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SendMoneyForm from '../forms/SendMoneyForm';
import { sendMoney } from '../../actions';
import AccountTable from '../tables/AccountTable';


class SendMoneyPage extends Component {
  submit = data => 
    this.props.login(data).then(() => alert('transaction done'));
  
  render() {
    return (
      <div>
        <h1>Login Page</h1>

        <SendMoneyForm submit={this.submit} />
        <AccountTable />
      </div>
    )
  }
}

SendMoneyPage.propTypes = {
  sendMoney: PropTypes.func.isRequired
}


export default connect(null, { sendMoney })(SendMoneyPage)