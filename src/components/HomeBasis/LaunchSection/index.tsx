import React from 'react';

import {CustomText} from '@components';

import classes from './index.module.scss';

import Image from 'next/image';

const dummyImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const LaunchSection = () => {
  return (
    <div className={classes.launchSection}>
      <div className={classes.launchCircle} />
      <div className={classes.leftSide}>
        <span className={classes.texts}>
          <CustomText className={classes.heading} text="REAL ESTATE" />
          <CustomText className={classes.title} text="Hayalindeki evi bulacağın yer..." />
          <CustomText
            className={classes.description}
            text="Eşsiz mimariler, merkezi lokasyonlar, ayrıcalıklı yaşam alanları ve sosyal imkanlarla dolu projeleri keşfetmeye hazır mısın?"
          />
        </span>
        <div className={classes.searchBar}>
          <input className={classes.searchInput} type="text" placeholder="Ara..." />
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.imageWrapper}>
          <Image className={classes.image} src={dummyImage} alt="launch" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
