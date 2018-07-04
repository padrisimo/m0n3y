import React from 'react';
import styled from 'styled-components';

const RoundBtn = styled.button`
    background-color: #4B3CFA;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 100%;
    border-radius: 24px;
    margin-top: ${props => props.marTop}
`;


const Button = ({marTop, text}) => (
  <RoundBtn marTop={marTop} text={text} role="button">{text}</RoundBtn>
);

export default Button;
