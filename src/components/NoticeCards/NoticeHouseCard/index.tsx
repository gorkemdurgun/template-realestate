import React from 'react';

import classes from './index.module.scss';
import {CustomButton, CustomText} from '@components';
import Image from 'next/image';

import {
  PiMapPinDuotone as PinIcon,
  PiUniteSquareDuotone as RoomNumberIcon,
  PiBracketsSquareDuotone as SquareMeterIcon,
  PiHouseSimpleDuotone as HouseTypeIcon,
} from 'react-icons/pi';

type Props = {
  noticeData: HouseProperties;
};

export const NoticeHouseCard = ({noticeData}: Props) => {
  const {id} = noticeData;

  const randomNum = Math.floor(Math.random() * 1000);
  const isEven = randomNum % 2 === 0;

  const dummyImage =
    'https://hips.hearstapps.com/hmg-prod/images/ef09869db8270fd18168717eafd63069l-m1392693734xd-w1020-h770-q80-1626190314.jpg?crop=0.611xw:1.00xh;0.171xw,0&resize=640:*';
  const dummyRoomNumber = isEven ? '3+1' : '2+1';
  const dummySquareMeter = isEven ? '120' : '80';
  const houseType = isEven ? 'Daire' : 'Villa';
  const dummyNoticeType = isEven ? 'Satılık' : 'Kiralık';

  return (
    <div className={classes.noticeHouseCard}>
      <div className={classes.topSide}>
        <div className={classes.imageWrapper}>
          <Image className={classes.image} src={dummyImage} alt="notice" layout="fill" objectFit="cover" />
        </div>
        <div className={classes.noticeType}>
          <CustomText className={classes.text} text={dummyNoticeType} />
        </div>
      </div>
      <div className={classes.bottomSide}>
        <div className={classes.location}>
          <PinIcon className={classes.icon} />
          <CustomText className={classes.text} text="İstanbul, Türkiye" />
        </div>
        <div className={classes.properties}>
          <div className={classes.item}>
            <RoomNumberIcon className={classes.icon} />
            <CustomText className={classes.text} text={dummyRoomNumber} />
          </div>
          <div className={classes.item}>
            <SquareMeterIcon className={classes.icon} />
            <CustomText className={classes.text} text={dummySquareMeter + 'm²'} />
          </div>
          <div className={classes.item}>
            <HouseTypeIcon className={classes.icon} />
            <CustomText className={classes.text} text={houseType} />
          </div>
        </div>
        <div className={classes.actions}>
          <CustomButton className={classes.button} onClick={() => {}}>
            <CustomText className={classes.text} text="Detaylı İncele" />
          </CustomButton>
          <CustomText className={classes.price} text="1.000.000 ₺" />
        </div>
      </div>
    </div>
  );
};
