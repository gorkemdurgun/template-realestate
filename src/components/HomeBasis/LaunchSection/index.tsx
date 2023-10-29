import React from 'react';

import {CustomButton, CustomText} from '@components';

import {FaSearch as SearchIcon} from 'react-icons/fa';

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
          <span className={classes.selectItem}>
            <CustomText className={classes.label} text="Şehir" />
            <select className={classes.dropdown} placeholder="Şehir">
              <option className={classes.option} value="1">
                İstanbul
              </option>
              <option className={classes.option} value="2">
                İzmir
              </option>
              <option className={classes.option} value="3">
                Ankara
              </option>
            </select>
          </span>
          <span className={classes.selectItem}>
            <CustomText className={classes.label} text="Oda Sayısı" />
            <select className={classes.dropdown} placeholder="Oda Sayısı">
              <option className={classes.option} value="1">
                1+1
              </option>
              <option className={classes.option} value="2">
                2+1
              </option>
              <option className={classes.option} value="3">
                3+1
              </option>
            </select>
          </span>
          <span className={classes.selectItem}>
            <CustomText className={classes.label} text="Fiyat Aralığı" />
            <select className={classes.dropdown} placeholder="Fiyat Aralığı">
              <option className={classes.option} value="1">
                100.000 - 200.000
              </option>
              <option className={classes.option} value="2">
                200.000 - 300.000
              </option>
              <option className={classes.option} value="3">
                300.000 - 400.000
              </option>
            </select>
          </span>
          <CustomButton className={classes.searchButton} onClick={() => {}}>
            <SearchIcon className={classes.icon} />
          </CustomButton>
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
