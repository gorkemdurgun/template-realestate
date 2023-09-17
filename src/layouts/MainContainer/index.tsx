import React from 'react';

import classes from './index.module.scss';
import {CustomNavbar, Breadcrumb, Footer} from '@components';

type Props = {
  children: React.ReactNode;
  activeSection?: string;
};

const MainContainer = (props: Props) => {
  const {children, activeSection} = props;

  return (
    <div className={classes.mainContainer}>
      <CustomNavbar activeSection={activeSection} />
      <div className={classes.mainContent}>
        {/* <Breadcrumb /> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export {MainContainer};
