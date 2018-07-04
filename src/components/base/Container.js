import styled from 'styled-components';

const Container = styled.div`
  padding: 4em 9em;
  border-left: ${props => props.line ? '1px solid #E9EAF4': 'none'};
  margin-top: 5em;
  text-align: left;
  @media (max-width: 767px) {
    border-right: none;
    margin-top: 1em;
    padding: 4em 4em;
}
`
export default Container