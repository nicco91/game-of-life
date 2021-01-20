import styled from 'styled-components';

type Props = {
  isDragActive: boolean;
};

export default styled.div<Props>`
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    `4px dotted ${
      props.isDragActive
        ? props.theme.palette.primary.main
        : props.theme.border.color
    }`};
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  margin: 2rem;
  background: ${(props) =>
    props.isDragActive
      ? props.theme.palette.primary.background
      : props.theme.background.color};
  font-size: 24px;
  color: ${(props) =>
    props.isDragActive ? 'rgba(127, 25, 158, 1)' : '#202020'};
`;
