import React, {useEffect, useState} from 'react';

import classes from './index.module.scss';
import {CustomButton, CustomImageBox, CustomText} from '../Generics';
import {TEMP} from '../../assets/images';
import {Category, ProductType} from '@types';
import {
  LuCat as CatIcon,
  LuDog as DogIcon,
  LuBiohazard as AntibacterialIcon,
  LuDroplet as WaterProofIcon,
  LuChevronLeft as LeftArrowIcon,
  LuChevronRight as RightArrowIcon,
  LuSearch as ViewIcon,
} from 'react-icons/lu';
import {useRouter} from 'next/router';
import {isMobile} from 'react-device-detect';

const CategoryIcon = ({categories}: {categories: Category[]}) => {
  return (
    <>
      {categories.map((category, index) => {
        switch (category) {
          case 'dog':
            return <DogIcon key={index} className={classes.icon} />;
          case 'cat':
            return <CatIcon key={index} className={classes.icon} />;
          default:
            return null;
        }
      })}
    </>
  );
};

type Props = {
  id?: string;
  title?: string;
  list: ProductType[];
};

const CatalogGrid: React.FC<Props> = props => {
  const {id, title, list} = props;
  const router = useRouter();

  const GridItem = ({item}: {item: ProductType}) => {
    const router = useRouter();
    const [activeVariant, setActiveVariant] = useState(0);

    function onMouseEnterVariant(index: number) {
      if (index === activeVariant) return;
      setActiveVariant(index);
    }

    function onMouseLeaveVariant() {
      setActiveVariant(0);
    }

    function onRightArrowClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.stopPropagation();
      setActiveVariant(activeVariant === item.variants.length - 1 ? 0 : activeVariant + 1);
    }
    function onLeftArrowClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.stopPropagation();
      setActiveVariant(activeVariant === 0 ? item.variants.length - 1 : activeVariant - 1);
    }

    function onClickDetail() {
      router.push({
        pathname: `/catalog/detail/${item.id}`,
        query: {title: item.title},
      });
    }

    return (
      <div id={id} className={classes.gridItem} onClick={!isMobile ? onClickDetail : undefined}>
        <div className={classes.overview}>
          <span className={classes.textBox}>
            <CustomText className={classes.title} text={item.title} />
            <CustomText className={classes.brief} text={item?.brief} />
            <CustomText className={classes.price} text={`$${item?.variants?.[activeVariant]?.sizes[0].size_price}`} />
          </span>
          <CustomImageBox
            className={classes.thumbnailBox}
            alt="Product Image"
            src={item?.variants?.[activeVariant]?.image || TEMP.TempProd1}
          />
        </div>
        <div className={classes.variants}>
          {item?.variants.map((variant, index) => {
            const activeSizes = variant.sizes.map(size => size.size_name);
            return (
              <div
                key={index}
                className={classes.variant}
                onMouseEnter={() => onMouseEnterVariant(index)}
                onMouseLeave={onMouseLeaveVariant}>
                <div className={classes.variantImage}>
                  <CustomImageBox className={classes.imageBox} alt="Product Image" src={variant.image} />
                </div>
                <div className={classes.variantSizes}>
                  <span aria-disabled={!activeSizes.includes('S')}>
                    <CustomText className={classes.size} text={'S'} />
                  </span>
                  <span aria-disabled={!activeSizes.includes('M')}>
                    <CustomText className={classes.size} text={'M'} />
                  </span>
                  <span aria-disabled={!activeSizes.includes('L')}>
                    <CustomText className={classes.size} text={'L'} />
                  </span>
                  <span aria-disabled={!activeSizes.includes('XL')}>
                    <CustomText className={classes.size} text={'XL'} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.arrows}>
          <CustomButton
            disabled={item.variants.length === 1}
            className={classes.arrowLeft}
            onClick={event => onLeftArrowClick(event)}>
            <LeftArrowIcon className={classes.icon} />
          </CustomButton>
          <CustomButton
            disabled={item.variants.length === 1}
            className={classes.arrowRight}
            onClick={onRightArrowClick}>
            <RightArrowIcon className={classes.icon} />
          </CustomButton>
        </div>
        <div className={classes.features}>
          <CategoryIcon categories={item.category} />
          {item.features?.includes('waterproof') && <WaterProofIcon className={classes.icon} />}
          {item.features?.includes('antibacterial') && <AntibacterialIcon className={classes.icon} />}
        </div>
        <CustomButton className={classes.detailButton} onClick={onClickDetail}>
          <CustomText className={classes.text} text="See details" />
          <ViewIcon className={classes.icon} />
        </CustomButton>
      </div>
    );
  };

  return (
    <div id="catalog" className={classes.catalogContainer}>
      {title && (
        <span className={classes.title}>
          <CustomText className={classes.text} text={title} />
          <CustomButton className={classes.seeAllButton} onClick={() => router.push('/catalog')}>
            <CustomText className={classes.text} text="See all products >" />
          </CustomButton>
        </span>
      )}
      <div className={classes.grid}>
        {list.map((item, index) => {
          return <GridItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export {CatalogGrid};
