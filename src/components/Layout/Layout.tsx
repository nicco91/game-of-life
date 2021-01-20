import React, { FC } from 'react';
import LayoutContent from './LayoutContent';
import LayoutTitle from './LayoutTitle';

const Layout: FC = ({ children }) => {
  return (
    <div className="Layout">
      <LayoutTitle />
      <LayoutContent>{children}</LayoutContent>
    </div>
  );
};

export default Layout;
