import React from 'react';

import classes from './index.module.scss';
import {useTranslation} from 'react-i18next';

type Props = {
  className?: string;
  translate?: boolean;
  text: string;
};

const CustomText = ({className, translate, text}: Props) => {
  const {t, i18n} = useTranslation();

  const textClassName = className ? `${classes.customText} ${className}` : classes.customText;
  const translatedText = translate
    ? t(text, {
        lng: i18n.language,
      })
    : text;

  return (
    <p suppressHydrationWarning className={textClassName}>
      {translatedText}
    </p>
  );
};

export {CustomText};
