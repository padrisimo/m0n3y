import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import Button from '../base/Button';
import { Input } from '../base/Input';


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
    if (!data.amount) errors.amount = "Please enter amount"; else if (!Validator.isFloat(data.amount, { min: 1, max: this.props.top })) errors.amount = "You Have not enought money to send";
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
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Jhon Smith"
            value={data.name}
            onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email Adress</label>
          <Input
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
          <Input
            type="number"
            id="amount"
            min="0"
            name="amount"
            placeholder="1"
            step='0.01'
            value={data.amount}
            onChange={this.onChange}
            required
          />
          {errors.amount && <InlineError text={errors.amount} />}
        </Form.Field>
        <Button marTop='5em' text='Send' />
      </Form>
    )
  }
}

SendMoneyForm.propTypes = {
  submit: PropTypes.func.isRequired,
  top: PropTypes.number.isRequired
}


export default SendMoneyForm;