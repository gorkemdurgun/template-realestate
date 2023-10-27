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
import {PriceFormatter} from '@utils';

type Props = {
  noticeData: ApartmentProperties;
};

const formatNoticeType = (noticeType?: NoticeType) => {
  switch (noticeType) {
    case 'sale':
      return 'Satılık';
    case 'rent':
      return 'Kiralık';
    default:
      return '';
  }
};

const formatHouseType = (houseType?: HouseType) => {
  switch (houseType) {
    case 'apartment':
      return 'Daire';
    case 'residence':
      return 'Rezidans';
    case 'villa':
      return 'Villa';
    case 'detached_house':
      return 'Müstakil Ev';
    case 'mansion':
      return 'Köşk';
    case 'farm':
      return 'Çiftlik Evi';
    case 'summer_house':
      return 'Yazlık';
    case 'all_apartment':
      return 'Bütün Apartman';
    case 'waterside':
      return 'Yalı';
    default:
      return 'Diğer';
  }
};

export const NoticeHouseCard = ({noticeData}: Props) => {
  return (
    <div className={classes.noticeHouseCard}>
      <div className={classes.topSide}>
        <div className={classes.imageWrapper}>
          <Image className={classes.image} src={noticeData?.images?.[0]} alt="notice" layout="fill" objectFit="cover" />
        </div>
        <div className={classes.noticeType}>
          <CustomText className={classes.text} text={formatNoticeType(noticeData?.notice_type)} />
        </div>
      </div>
      <div className={classes.bottomSide}>
        <div className={classes.location}>
          <PinIcon className={classes.icon} />
          <CustomText
            className={classes.text}
            text={noticeData?.address?.district + ', ' + noticeData?.address?.city}
          />
        </div>
        <div className={classes.properties}>
          <div className={classes.item}>
            <RoomNumberIcon className={classes.icon} />
            <CustomText className={classes.text} text={noticeData?.room_count} />
          </div>
          <div className={classes.item}>
            <SquareMeterIcon className={classes.icon} />
            <CustomText className={classes.text} text={noticeData?.square_meter_gross + 'm²'} />
          </div>
          <div className={classes.item}>
            <HouseTypeIcon className={classes.icon} />
            <CustomText className={classes.text} text={formatHouseType(noticeData?.house_type)} />
          </div>
        </div>
        <div className={classes.actions}>
          <CustomButton className={classes.button} onClick={() => {}}>
            <CustomText className={classes.text} text="Detaylı İncele" />
          </CustomButton>
          <CustomText className={classes.price} text={PriceFormatter.formatPrice(noticeData?.price)} />
        </div>
      </div>
    </div>
  );
};
