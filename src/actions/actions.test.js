import React from 'react'
import { fetchTransactions, fetchAccount, handleFailure } from '../actions'
import {
  FETCH_TRANSACTIONS,
  HAND_FAILURE,
  FETCH_ACCOUNT
} from '../actions/types'

describe('Actions test', () => {
  it('should contain an action to handle transactions request', () => {
    expect(fetchTransactions()).toEqual({
      type: FETCH_TRANSACTIONS
    })
  })
  it('should contain an action to handle failure', () => {
    const errorAction = 'error'
    expect(handleFailure(errorAction)).toEqual({
      type: HAND_FAILURE,
      error: errorAction
    })
  })
  it('should contain an action to handle success', () => {
    const response = [
      {
        "name": "My cool account",
        "total_sent": 4500,
        "left_available": 13500
    }
    ]
    expect(fetchAccount(response)).toEqual({
      type: FETCH_ACCOUNT,
      payload: response
    })
  })
})
