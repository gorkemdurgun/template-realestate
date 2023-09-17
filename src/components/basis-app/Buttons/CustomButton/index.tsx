import React from 'react';

import classes from './index.module.scss';

type Props = {
  disabled?: boolean;
  ariaSelected?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const CustomButton = ({ariaSelected, disabled, className, children, onClick}: Props) => {
  const thisClass = className ? `${classes.customTextButton} ${className}` : classes.customTextButton;

  return (
    <button aria-selected={ariaSelected} disabled={disabled} className={thisClass} onClick={onClick}>
      {children}
    </button>
  );
};

export {CustomButton};
