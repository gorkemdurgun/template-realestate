import React from 'react';

import {CustomButton, CustomText, NoticeHouseCard} from '@components';

import {FaArrowRight as ArrowRightIcon} from 'react-icons/fa';

import classes from './index.module.scss';
import {animated} from '@react-spring/web';

type Props = {
  // listAnimationStyle: any;
};

export const QuakeAnalysisSection = () => {
  return (
    <div className={classes.quakeAnalysisSection}>
      <div className={classes.header}>
        <CustomText className={classes.heading} text="Deprem Analizi" />
        <CustomButton className={classes.explore} onClick={() => {}}>
          <CustomText className={classes.text} text="Tümünü Gör" />
          <ArrowRightIcon className={classes.icon} />
        </CustomButton>
      </div>
      <div className={classes.list}>
        <NoticeHouseCard noticeData={null} />
        <NoticeHouseCard noticeData={null} />
        <NoticeHouseCard noticeData={null} />
      </div>
    </div>
  );
};
