import styled from 'styled-components';

type Props = {
  height: number;
};

export default styled.div<Props>`
  display: block;
  height: ${(props) => props.height}px;
  box-sizing: content-box;
  border-top: 1px solid ${(props) => props.theme.border.color};
  border-left: 1px solid ${(props) => props.theme.border.color};
  flex: 0 0 auto;

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.border.color};
  }
`;
