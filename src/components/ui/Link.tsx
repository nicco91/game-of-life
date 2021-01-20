import styled from 'styled-components';

export default styled.a`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.palette.primary.dark};
    text-decoration: underline;
  }
`;
