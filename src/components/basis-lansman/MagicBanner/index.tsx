import React from 'react';

import classes from './index.module.scss';
import {CustomText} from '../../basis-app/CustomText';
import {CustomImageBox} from '../../basis-app/CustomImageBox';
import {PNG, SVG} from '../../../assets/images';

const MagicBanner = () => {
  return (
    <div className={classes.interestedBanner}>
      <div className={classes.boxWrapper}>
        <div className={classes.box}>
          <div className={classes.content}>
            <CustomImageBox alt="Cat Toys" className={classes.image} src={PNG.BannerCat2} />
            <span className={classes.textContainer}>
              <CustomText translate className={classes.text} text="magicBanner.first.line1" />
              <CustomText translate className={classes.text} text="magicBanner.first.line2" />
            </span>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.content}>
            <CustomImageBox alt="Indoor Beds" className={classes.image} src={PNG.BannerCat3} />
            <span className={classes.textContainer}>
              <CustomText translate className={classes.text} text="magicBanner.second.line1" />
              <CustomText translate className={classes.text} text="magicBanner.second.line2" />
            </span>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.content}>
            <CustomImageBox alt="Outdoor Beds" className={classes.image} src={PNG.BannerCat} />
            <span className={classes.textContainer}>
              <CustomText translate className={classes.text} text="magicBanner.third.line1" />
              <CustomText translate className={classes.text} text="magicBanner.third.line2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export {MagicBanner};
