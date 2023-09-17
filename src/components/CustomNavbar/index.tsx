import React, {useEffect, useState} from 'react';

import classes from './index.module.scss';
import Image from 'next/image';
import {PiPawPrintDuotone} from 'react-icons/pi';

import {CustomButton, CustomDropdown, CustomImageBox, CustomText} from '@components';

import {SVG} from '@assets';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';

const navs = [
  {
    section: 'lansman',
    name: 'Lansman',
    link: '/',
  },
  {
    section: 'catalog',
    name: 'Katalog',
    link: '/catalog-detail',
  },
  {
    section: 'about',
    name: 'Hakkımızda',
    link: '/about',
  },
  {
    section: 'contact',
    name: 'İletişim',
    link: '/contact',
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

const CustomNavbar: React.FC<Props> = props => {
  const {activeSection} = props;

  const {i18n} = useTranslation();
  const router = useRouter();
  const {pathname} = router;

  const [activeLanguage, setActiveLanguage] = useState('tr');

  function languageToIcon(language: string) {
    switch (language) {
      case 'Türkçe':
        return SVG.LangTR;
      case 'English':
        return SVG.LangEN;
      case 'العربية':
        return SVG.LangAR;
      default:
        return SVG.LangTR;
    }
  }
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({top: element.offsetTop - 130, behavior: 'smooth'});
    }
  }
  function onNavClick(id: string) {
    if (pathname === '/') {
      scrollToSection(id);
    } else {
      router.push('/');
      setTimeout(() => {
        scrollToSection(id);
      }, 666);
    }
  }

  useEffect(() => {
    i18n.changeLanguage(activeLanguage.toLowerCase());
  }, [activeLanguage]);

  return (
    <div className={classes.navbar}>
      <a href="/">
        <CustomImageBox priority className={classes.logo} alt="logo" src={SVG.LogoNXT} />
      </a>
      <div className={classes.navigations}>
        <div className={classes.indicator} />
        {navs.map((nav, index) => (
          <CustomButton key={index} className={classes.navButton} onClick={() => onNavClick(nav.section)}>
            <CustomText
              className={activeSection === nav.section ? classes.activeText : classes.inactiveText}
              text={nav.name}
            />
            <PiPawPrintDuotone className={activeSection === nav.section ? classes.activeIcon : classes.inactiveIcon} />
          </CustomButton>
        ))}
      </div>
      <div className={classes.actions}>
        <div className={classes.auths}>
          <CustomButton className={classes.actionButton} onClick={() => router.push('/login')}>
            <CustomText className={classes.text} text="Giriş Yap" />
          </CustomButton>
          <CustomButton className={classes.actionButton} onClick={() => router.push('/register')}>
            <CustomText className={classes.text} text="Kayıt Ol" />
          </CustomButton>
        </div>
        <CustomDropdown
          options={languages.map(item => item.value)}
          activeOption={activeLanguage}
          onChange={option => setActiveLanguage(option)}>
          <Image className={classes.languageIcon} src={languageToIcon(activeLanguage)} alt="language" />
        </CustomDropdown>
      </div>
    </div>
  );
};

export {CustomNavbar};
