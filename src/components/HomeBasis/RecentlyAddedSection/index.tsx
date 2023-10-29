import React from 'react';

import {CustomButton, CustomText, NoticeHouseCard} from '@components';

import {FaArrowRight as ArrowRightIcon} from 'react-icons/fa';

import classes from './index.module.scss';
import {animated} from '@react-spring/web';

type Props = {
  listAnimationStyle: any;
  notices: ApartmentProperties[];
};

export const RecentlyAddedSection = ({listAnimationStyle, notices}: Props) => {
  return (
    <div className={classes.recentlyAddedSection}>
      <div className={classes.header}>
        <CustomText className={classes.heading} text="Son Eklenenler" />
        <CustomButton className={classes.explore} onClick={() => {}}>
          <CustomText className={classes.text} text="Tümünü Gör" />
          <ArrowRightIcon className={classes.icon} />
        </CustomButton>
      </div>
      <animated.div style={listAnimationStyle} className={classes.list}>
        {notices.map((item, index) => {
          return <NoticeHouseCard noticeData={item} key={index} />;
        })}
      </animated.div>
    </div>
  );
};
