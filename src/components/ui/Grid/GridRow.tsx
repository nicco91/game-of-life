import styled from 'styled-components';

type Props = {
  height: number;
};

export default styled.div<Props>`
  display: flex;
  /* height: ${(props) => props.height}px; */
  /* box-sizing: content-box; */
  /* border-top: 1px solid ${(props) => props.theme.border.color};
  border-left: 1px solid ${(props) => props.theme.border.color}; */
  flex: 0 0 auto;

  &:not(:first-child) {
    margin-top: 3px;
  }

  /* &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.border.color};
  } */
`;
