import styled from 'styled-components';

type Props = {
  alive: boolean;
  size: number;
};

export default styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-right: 1px solid ${(props) => props.theme.border.color};
  display: inline-block;
  background: ${(props) =>
    props.alive
      ? props.theme.palette.secondary.main
      : props.theme.background.color};
`;
