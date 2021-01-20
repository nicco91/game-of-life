import React, { FC } from 'react';
import styled from 'styled-components';
import AppLogo from '../ui/AppLogo';
import Title from '../ui/Title';

const LayoutTitle: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <AppLogo className="logo" />
      <Title className="title">Game of Life</Title>
    </div>
  );
};

export default styled(LayoutTitle)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 1.5rem;

  .title {
    flex: 0 1 auto;
    width: auto;
  }

  .logo {
    margin-right: 1.5rem;
  }
`;
