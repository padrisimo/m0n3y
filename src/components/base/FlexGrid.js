import styled from 'styled-components';

export const Flexrow = styled.div`
  display: flex;
  padding-top: ${props => props.paddTop};
  padding-bottom: ${props => props.paddBtm}
`

export const Flexcolumn = styled.div`
  text-align: center;
  width: ${(props) => props.size / 12 * 100}vw;
  `