import React, {useEffect} from 'react';

import classes from './index.module.scss';

import {PiInstagramLogo, PiWhatsappLogo, PiPhoneCall} from 'react-icons/pi';
import {CustomButton, CustomText} from '@components';

import {sendContact} from '@services';

type Props = {
  id?: string;
};

const ContactUsSection: React.FC<Props> = props => {
  const {id} = props;

  const [formState, setFormState] = React.useState<ContactForm>({
    id: '',
    status: false,
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    createdAt: new Date(),
  });

  function onSendForm() {
    sendContact(formState).then(() => {
      setFormState({
        id: '',
        status: false,
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
        createdAt: new Date(),
      });
      alert('En kısa sürede sizinle iletişime geçeceğiz.');
    });
  }

  function onChangeForm(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setFormState({...formState, [name]: value});
    if (name === 'phone') {
      setFormState({...formState, [name]: phoneMasker(value)});
    }
  }

  function phoneMasker(value: string) {
    const digits = value.replace(/\D/g, '');
    const digitLength = digits.length;

    if (digitLength < 4) {
      return digits;
    }
    if (digitLength < 7) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    if (digitLength < 9) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6, 8)}`;
    }
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)}`;
  }

  function onValidateForm() {
    const emailPattern = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const textPattern = new RegExp('^[a-zA-ZçÇğĞıİöÖşŞüÜ ]+$');
    const messagePattern = new RegExp('^[a-zA-ZçÇğĞıİöÖşŞüÜ0-9.,;:!?()/%&@ ]+$');
    const isEmailValid = emailPattern.test(formState.email);
    const isPhoneValid = formState.phone.length === 15;
    const isNameValid = textPattern.test(formState.name);
    const isSurnameValid = textPattern.test(formState.surname);
    const isMessageValid = messagePattern.test(formState.message);

    return isEmailValid && isPhoneValid && isNameValid && isSurnameValid && isMessageValid;
  }

  return (
    <div id={id} className={classes.contactUsSection}>
      <div className={classes.formSide}>
        <div className={classes.formContainer}>
          <CustomText className={classes.formTitle} text="Bizimle iletişime geçin" />
          <div className={classes.form}>
            <div className={classes.formRow}>
              <div className={classes.formItem}>
                <CustomText className={classes.formLabel} text="Ad" />
                <input
                  className={classes.formInput}
                  type="text"
                  name="name"
                  placeholder="Adınızı giriniz"
                  value={formState.name}
                  onChange={onChangeForm}
                />
              </div>
              <div className={classes.formItem}>
                <CustomText className={classes.formLabel} text="Soyad" />
                <input
                  className={classes.formInput}
                  type="text"
                  name="surname"
                  placeholder="Soyadınızı giriniz"
                  value={formState.surname}
                  onChange={onChangeForm}
                />
              </div>
            </div>
            <div className={classes.formItem}>
              <CustomText className={classes.formLabel} text="E-posta" />
              <input
                className={classes.formInput}
                type="email"
                name="email"
                placeholder="E-posta adresinizi giriniz"
                value={formState.email}
                onChange={onChangeForm}
              />
            </div>
            <div className={classes.formItem}>
              <CustomText className={classes.formLabel} text="Telefon" />
              <input
                className={classes.formInput}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                placeholder="Telefon numaranızı giriniz (5XX-XXX-XXXX)"
                value={formState.phone}
                onChange={onChangeForm}
              />
            </div>
            <div className={classes.formItem}>
              <CustomText className={classes.formLabel} text="Mesaj" />
              <textarea
                className={classes.formTextArea}
                name="message"
                placeholder="Mesajınızı giriniz"
                value={formState.message}
                onChange={onChangeForm}
              />
            </div>
            <CustomButton disabled={!onValidateForm()} className={classes.formButton} onClick={onSendForm}>
              <CustomText className={classes.text} text="Gönder" />
            </CustomButton>
          </div>
        </div>
        <div className={classes.socialMediaContainer}>
          <CustomText className={classes.socialMediaTitle} text="Daha hızlı iletişim için" />
          <div className={classes.socialMediaList}>
            <div className={classes.socialMediaItem}>
              <div className={classes.socialMediaIcon}>
                <PiInstagramLogo className={classes.icon} />
              </div>
              <CustomText className={classes.socialMediaText} text="@Real Estate" />
            </div>
            <div className={classes.socialMediaItem}>
              <div className={classes.socialMediaIcon}>
                <PiWhatsappLogo className={classes.icon} />
              </div>
              <CustomText className={classes.socialMediaText} text="+90 530 000 00 00" />
            </div>
            <div className={classes.socialMediaItem}>
              <div className={classes.socialMediaIcon}>
                <PiPhoneCall className={classes.icon} />
              </div>
              <CustomText className={classes.socialMediaText} text="+90 530 000 00 00" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mapSide}>
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          frameBorder={0}
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Izmir+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export {ContactUsSection};
