import styled from 'styled-components';

export default styled.h1`
  font-size: 48px;
  margin: 0;
  text-align: center;
  width: 100%;
  font-family: 'Caveat', sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.palette.primary.main};
`;
