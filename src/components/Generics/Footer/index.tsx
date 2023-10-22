import {CustomButton, CustomImageBox, CustomText} from '@components';

import classes from './index.module.scss';
import {SVG} from '@assets';
import {PiTiktokLogo, PiInstagramLogo, PiEnvelope} from 'react-icons/pi';
import {LuSend as SendIcon} from 'react-icons/lu';

export const Footer = () => {
  return (
    <div id="footer" className={classes.footerContainer}>
      <div className={classes.footerLeft}>
        <CustomImageBox className={classes.logo} src={SVG.LogoNXT} alt="Logo" />
        <span className={classes.textContainer}>
          <CustomText className={classes.text} text="© 2021 All Rights Reserved." />
          <CustomText className={classes.text} text="Designed by GD" />
        </span>
      </div>
      <div className={classes.footerRight}>
        <section className={classes.section}>
          <CustomText className={classes.title} text="Company" />
          <div className={classes.list}>
            <CustomText className={classes.text} text="About Us" />
            <CustomText className={classes.text} text="Contact Us" />
            <CustomText className={classes.text} text="Terms of Service" />
            <CustomText className={classes.text} text="Privacy Policy" />
          </div>
        </section>
        <section className={classes.section}>
          <CustomText className={classes.title} text="Follow Us" />
          <div className={classes.list}>
            <div className={classes.social}>
              <PiTiktokLogo className={classes.icon} color="#fff" />
              <CustomText className={classes.text} text="@Real Estate" />
            </div>
            <div className={classes.social}>
              <PiInstagramLogo className={classes.icon} color="#fff" />
              <CustomText className={classes.text} text="@Real Estate" />
            </div>
            <div className={classes.social}>
              <PiEnvelope className={classes.icon} color="#fff" />
              <CustomText className={classes.text} text="Real Estate@gmail.com" />
            </div>
          </div>
        </section>
        <section className={classes.lastSection}>
          <CustomText className={classes.title} text="Subscribe Us" />
          <div className={classes.inputContainer}>
            <input className={classes.input} type="text" placeholder="Enter your email" />
            <CustomButton className={classes.button} onClick={() => {}}>
              <SendIcon className={classes.icon} />
            </CustomButton>
          </div>
          <CustomText
            className={classes.text}
            text="Subscribe to our newsletter to get updates on our latest offers!"
          />
        </section>
      </div>
    </div>
  );
};
