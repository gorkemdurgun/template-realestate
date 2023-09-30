import React, {useEffect, useState} from 'react';

import classes from './index.module.scss';
import Image from 'next/image';
import {PiCursorClickDuotone} from 'react-icons/pi';
import {
  TbMapPin as LocationIcon,
  TbPhoneCall as PhoneIcon,
  TbMail as MailIcon,
  TbHome as HomeIcon,
  TbUserCircle as UserIcon,
} from 'react-icons/tb';

import {CustomButton, CustomDropdown, CustomImageBox, CustomText} from '@components';

import {PNG, SVG} from '@assets';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';

const navigations: {
  name: string;
  value: NavItem;
}[] = [
  {
    name: 'Anasayfa',
    value: 'home',
  },
  {
    name: 'Kiralık Evler',
    value: 'rentals',
  },
  {
    name: 'Hakkımızda',
    value: 'about',
  },
  {
    name: 'İletişim',
    value: 'contact',
  },
];
const languages = [
  {
    name: 'Türkçe',
    value: 'tr',
  },
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'العربية',
    value: 'ar',
  },
];

type Props = {
  activeSection?: string;
};

const ESTNavbar: React.FC<Props> = props => {
  const {activeSection} = props;

  const {i18n} = useTranslation();
  const router = useRouter();

  const [activeNav, setActiveNav] = useState<NavItem>('home');

  const [activeLanguage, setActiveLanguage] = useState('tr');

  useEffect(() => {
    i18n.changeLanguage(activeLanguage.toLowerCase());
  }, [activeLanguage]);

  return (
    <div className={classes.navbar}>
      <div className={classes.topSide}>
        <div className={classes.item}>
          <LocationIcon className={classes.icon} />
          <CustomText className={classes.text} text="İstanbul, Türkiye" />
        </div>
        <div className={classes.itemGroup}>
          <div className={classes.item}>
            <PhoneIcon className={classes.icon} />
            <CustomText className={classes.text} text="+90 212 123 45 67" />
          </div>
          <div className={classes.item}>
            <MailIcon className={classes.icon} />
            <CustomText className={classes.text} text="alreestate@gmail.com" />
          </div>
        </div>
      </div>
      <div className={classes.bottomSide}>
        <div className={classes.navigations}>
          {navigations.map((nav, index) => (
            <CustomButton
              key={index}
              ariaSelected={activeNav === nav.value}
              className={classes.item}
              onClick={() => setActiveNav(nav.value)}>
              <CustomText className={classes.text} text={nav.name} />
            </CustomButton>
          ))}
        </div>
        <div className={classes.logo}>
          <Image src={PNG.EstateLogo} alt="Logo" layout="fill" />
        </div>
        <div className={classes.actions}>
          <div className={classes.item}>
            <UserIcon className={classes.icon} />
            <CustomText className={classes.text} text="Giriş Yap / Kayıt Ol" />
          </div>
        </div>
      </div>
    </div>
  );
};

export {ESTNavbar};
