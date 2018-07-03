import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';


class SendMoneyForm extends Component {
  state = {
    data: {
      email: '',
      amount: 0,
      name: ''
    },
    loading: false,
    errors: {}
  };

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: false
      })
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.name) errors.name = "Please enter a valid name";
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && <Message negative>
          <Message.Header>Something went wrong</Message.Header>
          <p>{errors.global}</p>
        </Message>}
        <Form.Field error={!!errors.name}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="make it secure"
            value={data.name}
            onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email Adress</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.email}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="1"
            value={data.amount}
            onChange={this.onChange}
          />
          {errors.amount && <InlineError text={errors.amount} />}
        </Form.Field>
        <Button primary>Send</Button>
      </Form>
    )
  }
}

SendMoneyForm.propTypes = {
  submit: PropTypes.func.isRequired
}


export default SendMoneyForm;