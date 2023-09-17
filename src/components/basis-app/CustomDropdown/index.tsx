import React, {useEffect, useRef} from 'react';

import classes from './index.module.scss';
import {CustomText} from '../CustomText';

type Props = {
  className?: string;
  buttonClassName?: string;
  children?: React.ReactNode;
  options?: Array<string>;
  activeOption?: string;
  onChange?: (option: string) => void;
};

export const CustomDropdown: React.FC<Props> = props => {
  const {className, buttonClassName, children, options, activeOption, onChange} = props;

  const optionsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option?: string) => {
    onChange && onChange(option);
    toggleDropdown();
  };
  const onMouseOver = () => {
    setIsOpen(true);
  };

  // when click outside dropdown, close dropdwon but not when click on option
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsRef]);

  return (
    <div className={className ? `${classes.dropdown} ${className}` : classes.dropdown}>
      <div
        onMouseOver={onMouseOver}
        className={buttonClassName ? `${classes.dropdownButton} ${buttonClassName}` : classes.dropdownButton}>
        {children}
      </div>
      {isOpen && (
        <div className={classes.dropdownOptions} ref={optionsRef}>
          {options?.map((option, index) => (
            <div key={index} className={classes.dropdownOption} onClick={() => handleOptionClick(option)}>
              <CustomText className={classes.text} text={option} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
