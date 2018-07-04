import React from 'react';
import styled from 'styled-components';

const TransCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: .5em;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 1em;
  & > .money{
    font-weight: bold;
    font-size: 1.1em;
  }
  & > span > .small{
    font-size: .8em;
    color: grey;
  }
  
`

const Card = ({trans}) => (
  <TransCard key={trans.id}>
      <span>
        <div>{trans.name}</div>
        <div className="small">{trans.email}</div>
      </span>
      <span className='money'>£{parseFloat(trans.amount).toFixed(2)}</span>
    </TransCard>
);

export default Card;















