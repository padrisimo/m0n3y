import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SendMoneyForm from '../forms/SendMoneyForm';
import { postTransaction, getAccount } from '../../actions';
import AccountTable from '../tables/AccountTable';
import { Button, Header, Icon, Modal, Grid } from 'semantic-ui-react';
import HeadOne from '../base/HeadOne';
import Container from '../base/Container'



class SendMoneyPage extends Component {

  state = { modalOpen: false }

  componentDidMount = () => this.props.getAccount();

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  submit = data => {
    const update = {
      "name": "My Account",
      "total_sent": this.props.account.total_sent + Number(data.amount),
      "left_available": this.props.account.left_available - Number(data.amount)
    }
    return this.props.postTransaction(data, update).then(() => this.handleOpen());
  }

  render() {
    if (!this.props.fetched) {
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
          <Grid.Column mobile={16} tablet={8} computer={8} style={styles.nopad}>
            <Container >
              <HeadOne text='Send Money' />
              <SendMoneyForm submit={this.submit} top={this.props.account.left_available} />
            </Container>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} style={styles.nopad}>
            <Container line>
              <AccountTable account={this.props.account} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const styles = {
  nopad: {
    padding: 0,
    textAlign: 'center'
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