import React, {useEffect, useState} from 'react';

import {CustomButton, CustomImageBox, CustomText} from '@components';

import classes from './index.module.scss';
import {PNG, SVG} from '@assets';
import {checkFirebaseConnection} from '@services';

type Props = {
  id: string;
};

const WelcomeSection = (props: Props) => {
  const {id} = props;

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({top: element.offsetTop - 130, behavior: 'smooth'});
    }
  }

  const [firebaseConnection, setFirebaseConnection] = useState(false);

  useEffect(() => {
    checkFirebaseConnection().then(res => {
      setFirebaseConnection(res.connection);
    });
  }, []);

  return (
    <div id={id} className={classes.welcome}>
      <div className={classes.leftSide}>
        <CustomImageBox className={classes.iconBox} alt="Smile Icon" src={SVG.IconSmile} />
        <CustomImageBox className={classes.iconBox} alt="Cat Icon" src={SVG.IconCat} />
        <CustomImageBox className={classes.iconBox} alt="Succession Icon" src={SVG.IconSuccession} />
        <CustomImageBox className={classes.iconBox} alt="Star Icon" src={SVG.IconStar1} />
        <span className={classes.title}>
          <span className={classes.brand}>
            <CustomText className={classes.brandText} text={`Firebase: ${firebaseConnection}`} />
          </span>
          <div className={classes.flash} />
          <CustomText className={classes.text} text="Sevdiğin için en iyisini" />
          <CustomText className={classes.text} text="istemez misin?" />
        </span>
        <span className={classes.subtitle}>
          <CustomText
            className={classes.text}
            text="Real Estate ile evcil hayvanını özel ve güvende hissettir. Yaptığımız her şey onlar daha mutlu olsun diye."
          />
        </span>
        <div className={classes.actions}>
          <CustomButton className={classes.reviewButton} onClick={() => scrollToSection('catalog')}>
            <CustomText className={classes.text} text="Ürünleri incele" />
          </CustomButton>
          <CustomButton className={classes.contactButton} onClick={() => scrollToSection('contact')}>
            <CustomText className={classes.text} text="İletişime Geç" />
          </CustomButton>
        </div>
      </div>
      <div className={classes.rightSide}>
        <CustomImageBox className={classes.backTrapezoid} alt="Back Trapezoid" src={SVG.BackTrapezoid1} />
        <CustomImageBox priority className={classes.imageBox} alt="Cat & Dog" src={PNG.LaunchPets1} />
      </div>
    </div>
  );
};

export {WelcomeSection};
