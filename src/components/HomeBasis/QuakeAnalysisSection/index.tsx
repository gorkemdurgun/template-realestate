import React from 'react';

import {CustomButton, CustomText, NoticeHouseCard} from '@components';

import {MdOutlineTouchApp as TouchIcon} from 'react-icons/md';

import classes from './index.module.scss';
import {animated} from '@react-spring/web';
import Image from 'next/image';
import {PNG} from '@assets';

type Props = {
  sectionAnimationStyle: any;
};

const areaList = ['Marmara', 'Ege', 'Guneydogu', 'Guneydogu-Dogu', 'Dogu'];

const dotList = [
  'İstanbul-1999 (7.4)',
  'Bursa: 1968 (6.5)',
  'Manisa: 1970 (6.9)',
  'İzmir: 2020 (6.6)',
  'Muğla: 1957 (7.1)',
  'Hatay: 2023 (7.2)',
  'Kahramanmaraş: 2021 (6.8)',
  'Elazığ: 2020 (6.8)',
  'Bingöl: 2003 (6.4)',
  'Van: 2011 (7.2)',
];

export const QuakeAnalysisSection = ({sectionAnimationStyle}: Props) => {
  return (
    <animated.div style={sectionAnimationStyle} className={classes.quakeAnalysisSection}>
      <div className={classes.mapWrapper}>
        <Image className={classes.map} src={PNG.TurkeyMap} alt="map" layout="fill" objectFit="contain" />
        {areaList.map((item, index) => (
          <div key={index} className={`${classes[`area${index + 1}`]}`} />
        ))}
        {dotList.map((item, index) => (
          <div key={index} className={`${classes[`dot${index + 1}`]}`}>
            <div className={classes.popover}>
              <CustomText className={classes.text} text={item} />
            </div>
          </div>
        ))}
      </div>
      <div className={classes.informations}>
        <span className={classes.titleBox}>
          <CustomText className={classes.text} text="Binanızın deprem riskini" />
          <CustomText className={classes.subText} text="ücretsiz analiz edelim!" />
        </span>
        <span className={classes.description}>
          <CustomText className={classes.text} text="Türkiye'de nüfusun %80'i deprem riski altında yaşıyor." />
          <CustomText
            className={classes.text}
            text="Yakın geçmişte yaşanmış büyük depremleri haritada görebilirsiniz."
          />
          <CustomText
            className={classes.text}
            text="Ücretsiz analiz ve evinizi güvence altına almak için hemen başvurun."
          />
        </span>
        <CustomButton className={classes.button} onClick={() => {}}>
          <CustomText className={classes.text} text="Bilgi almak için lütfen tıklayın" />
          <TouchIcon className={classes.icon} />
        </CustomButton>
      </div>
    </animated.div>
  );
};
