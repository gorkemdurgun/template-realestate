import React from 'react';
import Image, {StaticImageData} from 'next/image';

import classes from './index.module.scss';

interface CustomImageBoxProps {
  priority?: boolean;
  objectFit?: string;
  className?: string;
  imageClassName?: string;
  alt: string;
  src: string | StaticImageData;
}

const CustomImageBox = ({priority = false, objectFit, className, imageClassName, src, alt}: CustomImageBoxProps) => {
  const boxClass = className ? `${classes.imageBox} ${className}` : classes.imageBox;

  return (
    <div className={boxClass}>
      <Image className={imageClassName} priority={priority} objectFit={objectFit} layout="fill" alt={alt} src={src} />
    </div>
  );
};

export {CustomImageBox};
