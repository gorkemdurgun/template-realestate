import React, {useEffect, useState} from 'react';
import {ProductSize, ProductVariant} from '@types';

import classes from './index.module.scss';
import {CustomText} from '../CustomText';
import {palette, sizes} from '@constants';

type Props = {
  variant: ProductVariant;
};

export const EditVariant: React.FC<Props> = props => {
  const {variant} = props;

  const [variantInformations, setVariantInformations] = useState(variant);
  const [variantSizes, setVariantSizes] = useState<ProductSize[]>(variant.sizes);

  useEffect(() => {
    setVariantInformations(variant);
  }, [variant]);

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    setVariantInformations({...variantInformations, image: e.target.value});
  }
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setVariantInformations({...variantInformations, variant_name: e.target.value});
  }
  function handleChangeColors(color: string) {
    const colors = variantInformations.variant_color;
    if (colors.includes(color)) {
      const index = colors.indexOf(color);
      colors.splice(index, 1);
    } else {
      colors.push(color);
    }
    setVariantInformations({...variantInformations, variant_color: colors});
  }
  function handleEnableDisableSize(size: ProductSize) {
    const sizeNames = variantSizes.map(item => item.size_name);
    if (sizeNames.includes(size.size_name)) {
      const index = sizeNames.indexOf(size.size_name);
      variantSizes.splice(index, 1);
    } else {
      variantSizes.push(size);
    }
    setVariantSizes([...variantSizes]);
  }

  useEffect(() => {
    setVariantInformations({...variantInformations, sizes: variantSizes});
  }, [variantSizes]);
  useEffect(() => {
    setVariantInformations(variant);
    setVariantSizes(variant.sizes);
  }, [variant]);

  return (
    <div className={classes.variantSection}>
      <div className={classes.inputSection}>
        <CustomText className={classes.label} text={'Image'} />
        <input
          className={classes.input}
          type="text"
          value={variantInformations.image.toString()}
          onChange={handleChangeImage}
        />
      </div>
      <div className={classes.inputSection}>
        <CustomText className={classes.label} text={'Name'} />
        <input
          className={classes.input}
          type="text"
          value={variantInformations.variant_name}
          onChange={handleChangeName}
        />
      </div>
      <div className={classes.colorsSection}>
        <CustomText className={classes.label} text={'Colors'} />
        <div className={classes.list}>
          {palette.map((item, index) => (
            <div key={index} className={classes.item}>
              <input
                className={classes.input}
                type="checkbox"
                checked={variantInformations.variant_color.includes(item.hexCode)}
                onChange={() => handleChangeColors(item.hexCode)}
              />
              <CustomText className={classes.text} text={item.hexCode} />
              <div className={classes.colorBox} style={{backgroundColor: item.hexCode}} />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.sizesSection}>
        <CustomText className={classes.label} text={'Sizes'} />
        <div className={classes.list}>
          {sizes.map((item, index) => (
            <div key={index} className={classes.item}>
              <input
                className={classes.input}
                type="checkbox"
                checked={variantSizes.map(item => item.size_name).includes(item.size_name)}
                onChange={() => handleEnableDisableSize(item)}
              />
              <CustomText className={classes.text} text={item.size_name} />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.dimensionsSection}>
        <CustomText className={classes.label} text={'All Sizes'} />
        <div className={classes.list}>
          {variantSizes.map((item, index) => (
            <div key={index} className={classes.item}>
              <CustomText className={classes.label} text={item.size_name} />
              <div className={classes.inputContainer}>
                <CustomText className={classes.label} text={'Price ($)'} />
                <input
                  className={classes.input}
                  type="text"
                  value={item.size_price}
                  onChange={e => {
                    item.size_price = e.target.value;
                    setVariantSizes([...variantSizes]);
                  }}
                />
              </div>
              <div className={classes.inputContainer}>
                <CustomText className={classes.label} text={'Stock'} />
                <input
                  className={classes.input}
                  type="text"
                  value={item.size_stock}
                  onChange={e => {
                    item.size_stock = e.target.value;
                    setVariantSizes([...variantSizes]);
                  }}
                />
              </div>
              <div className={classes.inputContainer}>
                <CustomText className={classes.label} text={'Dimension'} />
                <input
                  className={classes.input}
                  type="text"
                  value={item.size_dimension}
                  onChange={e => {
                    item.size_dimension = e.target.value;
                    setVariantSizes([...variantSizes]);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
