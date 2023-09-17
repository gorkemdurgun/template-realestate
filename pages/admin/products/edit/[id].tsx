import {
  getProductById,
  dynamicUpdateString as dynamicUpdateStringService,
  updateCategory as updateCategoryService,
  updateDiscount as updateDiscountService,
  updateFeatures as updateFeaturesService,
} from '@services';
import {Category, Feature, ProductSize, ProductType, ProductVariant} from '@types';
import {useEffect, useState} from 'react';

import classes from './index.module.scss';
import {CustomButton, CustomImageBox, CustomText, EditVariant} from '@components';
import {LuEdit as EditIcon, LuTrash2 as DeleteIcon} from 'react-icons/lu';
import {StaticImageData} from 'next/image';
import {useRouter} from 'next/router';
import {palette} from '@constants';

type Props = {
  productData: ProductType;
};

const categoryList: Category[] = ['cat', 'dog'];
const featuresList: ProductType['features'] = ['antibacterial', 'waterproof', 'breathable'];

export default function AdminEditProduct({productData}: Props) {
  const {id, title, brief, description, discount, category, variants, features} = productData;
  const router = useRouter();

  // main states
  const [basicInformations, setBasicInformations] = useState({
    title,
    brief,
    description,
  });
  const [discountInformations, setDiscountInformations] = useState<ProductType['discount']>({
    discount_percentage: discount?.discount_percentage,
    discount_start_date: discount?.discount_start_date,
    discount_end_date: discount?.discount_end_date,
  });
  const [featuresInformations, setFeaturesInformations] = useState<ProductType['features']>(features);
  const [categoryInformations, setCategoryInformations] = useState<ProductType['category']>(category);
  // variant states
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(variants[0]);

  // Main Product Handle Change Functions
  function handleChangeBasicInformations(
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const {name, value} = event.target;
    setBasicInformations({...basicInformations, [name]: value});
  }
  function handleChangeDiscountInformations(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    if (name === 'discount_percentage') {
      const percentage = Number(value);
      setDiscountInformations({...discountInformations, [name]: percentage});
    } else {
      setDiscountInformations({...discountInformations, [name]: value});
    }
  }
  function handleChangeCategoryInformations(value: Category) {
    const list = [...categoryInformations];
    if (list.includes(value)) {
      const index = list.indexOf(value);
      list.splice(index, 1);
    } else {
      list.push(value);
    }
    setCategoryInformations(list);
  }
  function handleChangeFeaturesInformations(value: Feature) {
    let list = [];
    if (featuresInformations) {
      list = [...featuresInformations];
    } else {
      list = [];
    }
    if (list.includes(value)) {
      const index = list.indexOf(value);
      list.splice(index, 1);
    } else {
      list.push(value);
    }
    setFeaturesInformations(list);
  }
  // Main Product Update Service Functions
  const updateTitle = async () => {
    if (basicInformations.title === title) return;
    await dynamicUpdateStringService(id, [
      {
        field: 'title',
        value: basicInformations.title,
      },
    ]);
  };
  const updateBrief = async () => {
    if (basicInformations.brief === brief) return;
    await dynamicUpdateStringService(id, [
      {
        field: 'brief',
        value: basicInformations.brief,
      },
    ]);
  };
  const updateDescription = async () => {
    if (basicInformations.description === description) return;
    await dynamicUpdateStringService(id, [
      {
        field: 'description',
        value: basicInformations.description,
      },
    ]);
  };
  const updateDiscount = async () => {
    if (
      discountInformations?.discount_percentage === discount?.discount_percentage &&
      discountInformations?.discount_start_date === discount?.discount_start_date &&
      discountInformations?.discount_end_date === discount?.discount_end_date
    )
      return;
    await updateDiscountService(id, discountInformations);
  };
  const updateCategory = async () => {
    if (categoryInformations === category) return;
    await updateCategoryService(id, categoryInformations);
  };
  const updateFeatures = async () => {
    if (featuresInformations === features) return;
    await updateFeaturesService(id, featuresInformations);
  };
  async function onSaveProductInformations() {
    await updateTitle();
    await updateBrief();
    await updateDescription();
    await updateDiscount();
    await updateCategory();
    await updateFeatures();
    router.reload();
  }

  const Sidebar = () => {
    return (
      <div className={classes.sidebar}>
        <CustomImageBox className={classes.variantImage} src={selectedVariant.image} alt="variant-image" />
        <div className={classes.variantList}>
          {variants.map((variant, index) => (
            <CustomButton key={index} className={classes.variantItem} onClick={() => setSelectedVariant(variant)}>
              <CustomText className={classes.text} text={variant.variant_name} />
            </CustomButton>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={classes.main}>
      <Sidebar />
      <div className={classes.product}>
        <div className={classes.inputSection}>
          <CustomText className={classes.label} text={'Title'} />
          <input
            className={classes.input}
            name="title"
            value={basicInformations.title}
            onChange={handleChangeBasicInformations}
          />
        </div>
        <div className={classes.inputSection}>
          <CustomText className={classes.label} text={'Brief'} />
          <input
            className={classes.input}
            name="brief"
            value={basicInformations.brief}
            onChange={handleChangeBasicInformations}
          />
        </div>
        <div className={classes.inputSection}>
          <CustomText className={classes.label} text={'Description'} />
          <textarea
            className={classes.input}
            name="description"
            value={basicInformations.description}
            onChange={handleChangeBasicInformations}
            rows={5}
          />
        </div>
        <div className={classes.discountSection}>
          <div className={classes.dateInput}>
            <CustomText className={classes.label} text={'Start Date'} />
            <input
              className={classes.input}
              type="date"
              name="discount_start_date"
              value={discountInformations.discount_start_date}
              onChange={handleChangeDiscountInformations}
            />
          </div>
          <div className={classes.dateInput}>
            <CustomText className={classes.label} text={'End Date'} />
            <input
              className={classes.input}
              type="date"
              name="discount_end_date"
              value={discountInformations.discount_end_date}
              onChange={handleChangeDiscountInformations}
            />
          </div>
          <div className={classes.percentageInput} onClick={() => console.log('dis', discountInformations)}>
            <CustomText className={classes.label} text={'Percentage'} />
            <input
              className={classes.input}
              type="number"
              name="discount_percentage"
              value={discountInformations.discount_percentage}
              onChange={handleChangeDiscountInformations}
            />
          </div>
        </div>
        <div className={classes.categorySection}>
          <CustomText className={classes.label} text={'Category'} />
          <div className={classes.categoryList}>
            {categoryList.map((item, index) => (
              <div key={index} className={classes.item}>
                <input
                  className={classes.checkbox}
                  type="checkbox"
                  name={item}
                  value={item}
                  checked={categoryInformations.includes(item)}
                  onChange={() => handleChangeCategoryInformations(item)}
                />
                <CustomText className={classes.text} text={item} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.featuresSection}>
          <CustomText className={classes.label} text={'Features'} />
          <div className={classes.featuresList}>
            {featuresList.map((item, index) => (
              <div key={index} className={classes.item}>
                <input
                  className={classes.checkbox}
                  type="checkbox"
                  name={item}
                  value={item}
                  checked={featuresInformations?.includes(item)}
                  onChange={() => handleChangeFeaturesInformations(item)}
                />
                <CustomText className={classes.text} text={item} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.actions}>
          <CustomButton className={classes.saveButton} onClick={onSaveProductInformations}>
            <CustomText className={classes.text} text={'Save'} />
          </CustomButton>
        </div>
        <br />
        <div className={classes.variantSection}>
          <CustomText className={classes.title} text={'Active Variant'} />
          <EditVariant variant={selectedVariant} />
        </div>
        <div className={classes.actions}>
          <CustomButton className={classes.saveButton} onClick={() => {}}>
            <CustomText className={classes.text} text={'Save'} />
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

/* export async function getStaticPaths() {
  const productsData = await getProducts();
  const paths = productsData.map(product => ({
    params: {id: product.id},
  }));

  return {
    paths,
    fallback: false,
  };
} */

export async function getStaticPaths() {
  return {
    paths: [{params: {id: 'lnqHOLz5tUxmfpDX7zE1'}}, {params: {id: 'ltoDGZ8Q9C1dWmF7nzWC'}}],
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const productId = params.id;
  const productData = await getProductById(productId);

  return {
    props: {
      productData,
    },
  };
}
