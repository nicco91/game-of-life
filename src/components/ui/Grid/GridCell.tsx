import styled from 'styled-components';

type Props = {
  alive: boolean;
  size: number;
};

export default styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: inline-block;
  background: ${(props) =>
    props.alive
      ? props.theme.palette.primary.main
      : props.theme.background.dark};
  border-radius: 3px;
  flex: 0 0 auto;

  &:not(:last-child) {
    margin-right: 3px;
  }
`;
