import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SendMoneyForm from '../forms/SendMoneyForm';
import { postTransaction, getAccount } from '../../actions';
import AccountTable from '../tables/AccountTable';
import { Button, Header, Icon, Modal, Grid } from 'semantic-ui-react'



class SendMoneyPage extends Component {

  state = { modalOpen: false }

  componentDidMount = () => this.props.getAccount();

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  submit = data => {
    const update = {
        "name": "My Account",
        "total_sent": 4500 + Number(data.amount),
        "left_available": 13500 - Number(data.amount)
    }
    return this.props.postTransaction(data, update).then(() => this.handleOpen());
  }

  render() {
    if(!this.props.fetched){
      return <div>..loading</div>
    }
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

        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <h1>Zopa</h1>
            <SendMoneyForm submit={this.submit} top={this.props.account.left_available} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <AccountTable account={this.props.account} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

SendMoneyPage.propTypes = {
  postTransaction: PropTypes.func.isRequired,
  getAccount: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  account: state.account.data,
  fetched: state.account.fetched,
})


export default connect(mapStateToProps, { postTransaction, getAccount })(SendMoneyPage)