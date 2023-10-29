import React from 'react';

import classes from './index.module.scss';
import {ESTNavbar, Breadcrumb, Footer} from '@components';

type Props = {
  ref?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  activeSection?: string;
};

const MainContainer = (props: Props) => {
  const {ref, children, activeSection} = props;

  return (
    <div ref={ref} className={classes.mainContainer}>
      <ESTNavbar activeSection={activeSection} />
      <div className={classes.mainContent}>
        {/* <Breadcrumb /> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export {MainContainer};
