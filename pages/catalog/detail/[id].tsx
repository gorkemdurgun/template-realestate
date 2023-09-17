import React, {useEffect, useState} from 'react';
import {ProductSize, ProductType} from '@types';
import {getProductById} from '@services';

import classes from './index.module.scss';
import {MainContainer, CustomButton, CustomImageBox, CustomNavbar, CustomText} from '@components';
import {useRouter} from 'next/router';
import {LuChevronLeft as LeftArrow, LuChevronRight as RightArrow, LuClock as Clock} from 'react-icons/lu';
import {IoMdStar as Star, IoMdStarHalf as HalfStar, IoMdStarOutline as EmptyStar} from 'react-icons/io';
import {
  LuCat as CatIcon,
  LuDog as DogIcon,
  LuBiohazard as AntibacterialIcon,
  LuDroplet as WaterProofIcon,
} from 'react-icons/lu';

const allSizes = [
  {
    id: 0,
    name: 'S',
  },
  {
    id: 1,
    name: 'M',
  },
  {
    id: 2,
    name: 'L',
  },
  {
    id: 3,
    name: 'XL',
  },
];

type Props = {
  product?: ProductType;
};

const DynamicStars = ({score}: {score: number}) => {
  const stars = [];
  const fullStars = Math.floor(score);
  const halfStars = Math.ceil(score - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star className={classes.star} key={i} />);
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(<HalfStar className={classes.star} key={i} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<EmptyStar className={classes.star} key={i} />);
  }

  return <div className={classes.reviewStars}>{stars}</div>;
};

function CatalogDetail({product}: Props) {
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeSize, setActiveSize] = useState<number | null>(null);
  const [activePrice, setActivePrice] = useState<number>(0);

  function discountCalculator(price: number, discount: number) {
    return (price * (1 - discount / 100)).toFixed(2);
  }

  function handleLeftArrowClick() {
    if (activeVariant > 0) {
      setActiveVariant(activeVariant - 1);
    } else {
      setActiveVariant(product?.variants.length - 1);
    }
  }
  function handleRightArrowClick() {
    if (activeVariant < product?.variants.length - 1) {
      setActiveVariant(activeVariant + 1);
    } else {
      setActiveVariant(0);
    }
  }

  useEffect(() => {
    // set active size to first available size
    const firstAvailableSize = product?.variants[activeVariant].sizes.find(
      (size: ProductSize) => size.size_id !== null,
    );
    setActiveSize(firstAvailableSize?.size_id);
  }, [activeVariant]);

  useEffect(() => {
    // if active size is null, set active price to 0, else set active price to selected size price
    if (activeSize === null) {
      setActivePrice(0);
    } else {
      const matchSizeWithPrice = product?.variants[activeVariant].sizes.find(
        (size: ProductSize) => size.size_id === activeSize,
      );
      setActivePrice(Number(matchSizeWithPrice?.size_price) || null);
    }
  }, [activeSize]);

  const Feature = ({icon, text}: {icon: React.ReactNode; text: string}) => (
    <div className={classes.feature}>
      {icon}
      <CustomText className={classes.text} text={text} />
    </div>
  );

  return (
    <MainContainer>
      <div className={classes.detail}>
        <div className={classes.leftSide}>
          <div className={classes.thumbnailContainer}>
            <div className={classes.counter}>
              <CustomText className={classes.counterText} text={`${activeVariant + 1}/${product?.variants.length}`} />
            </div>
            <CustomImageBox className={classes.imageBox} alt="product" src={product?.variants[activeVariant].image} />
            <div className={classes.arrowBox} data-direction="left" onClick={handleLeftArrowClick}>
              <LeftArrow className={classes.icon} />
            </div>
            <div className={classes.arrowBox} data-direction="right" onClick={handleRightArrowClick}>
              <RightArrow className={classes.icon} />
            </div>
          </div>
          <div
            className={classes.variantsContainer}
            style={{
              // max 4 grid column olacak şekilde ayarlandı
              gridTemplateColumns: `repeat(${product.variants.length > 4 ? 4 : product.variants.length}, 1fr)`,
            }}>
            {product.variants.map((variant, index) => (
              <div className={classes.variant} key={index} onClick={() => setActiveVariant(index)}>
                <CustomImageBox className={classes.imageBox} alt="variant" src={variant.image} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.featuresContainer}>
            {product.category?.includes('cat') && (
              <Feature icon={<CatIcon className={classes.icon} />} text="For Cats" />
            )}
            {product.category?.includes('dog') && (
              <Feature icon={<DogIcon className={classes.icon} />} text="For Dogs" />
            )}
            {product?.features?.includes('waterproof') && (
              <Feature icon={<WaterProofIcon className={classes.icon} />} text="Waterproof" />
            )}
            {product?.features?.includes('antibacterial') && (
              <Feature icon={<AntibacterialIcon className={classes.icon} />} text="Antibacterial" />
            )}
          </div>
          <div className={classes.titleContainer}>
            <CustomText className={classes.title} text={product?.title} />
            <div className={classes.usedColors}>
              {product?.variants[activeVariant].variant_color.map((color, index) => (
                <div className={classes.colorBox} key={index} style={{backgroundColor: color}} />
              ))}
            </div>
          </div>
          <div className={classes.reviewContainer}>
            <DynamicStars score={4.5} />
            <span>
              <CustomText className={classes.reviewScore} text="4.5" />
              <CustomText className={classes.reviewCount} text="(100 Reviews)" />
            </span>
          </div>
          {product.discount?.discount_percentage > 0 && (
            <div className={classes.priceContainer}>
              <div className={classes.discountBox}>
                <Clock className={classes.icon} />
                <CustomText className={classes.text} text={`%${product?.discount.discount_percentage}`} />
              </div>
              <CustomText className={classes.oldPrice} text={`${activePrice}$`} />
              <CustomText
                className={classes.newPrice}
                text={`${discountCalculator(activePrice, product.discount.discount_percentage)}$`}
              />
            </div>
          )}
          {product.discount?.discount_percentage === 0 ||
            (!product.discount && (
              <div className={classes.priceContainer}>
                <CustomText className={classes.newPrice} text={`${activePrice}$`} />
              </div>
            ))}
          <div className={classes.sizeContainer}>
            <CustomText className={classes.sizeTitle} text="Select Size" />
            <div className={classes.sizeList}>
              {allSizes.map((item, index) => {
                const isAvailableSize = product?.variants[activeVariant].sizes.some(
                  (size: ProductSize) => size.size_id === item.id,
                );
                return (
                  <CustomButton
                    key={index}
                    disabled={!isAvailableSize}
                    ariaSelected={item.id === activeSize}
                    className={classes.sizeBox}
                    onClick={() => setActiveSize(item.id)}>
                    <CustomText className={classes.text} text={item.name} />
                  </CustomButton>
                );
              })}
            </div>
          </div>
          <div className={classes.descriptionContainer}>
            <CustomText className={classes.descriptionTitle} text="Description" />
            <CustomText className={classes.descriptionText} text={product?.description} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getStaticPaths() {
  // Dinamik parametrelerle oluşturulacak sayfaların listesini döndürün
  return {
    paths: [{params: {id: 'lnqHOLz5tUxmfpDX7zE1'}}, {params: {id: 'ltoDGZ8Q9C1dWmF7nzWC'}}],
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const productId = params.id as string;
  // console.log('pid', productId);

  const product = await getProductById(productId);

  return {
    props: {
      product,
    },
  };
}

export default CatalogDetail;
