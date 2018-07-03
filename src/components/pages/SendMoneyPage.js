import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SendMoneyForm from '../forms/SendMoneyForm';
import { postTransaction } from '../../actions';
import AccountTable from '../tables/AccountTable';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'



class SendMoneyPage extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submit = data =>
    this.props.postTransaction(data).then(() => this.handleOpen());

  render() {
    return (
      <div>
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >
          <Header icon='pound sign' content='Congratulations!' />
          <Modal.Content>
            <h3>Transaction done with success!</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
          </Button>
          </Modal.Actions>
        </Modal>
        <h1>Zopa</h1>

        <SendMoneyForm submit={this.submit} />
        <AccountTable />
      </div>
    )
  }
}

SendMoneyPage.propTypes = {
  postTransaction: PropTypes.func.isRequired
}


export default connect(null, { postTransaction })(SendMoneyPage)