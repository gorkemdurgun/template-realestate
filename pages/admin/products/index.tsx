import {addProduct, getProducts} from '@services';
import {Category, ProductSize, ProductType, ProductVariant} from '@types';
import {useEffect, useState} from 'react';

import classes from './index.module.scss';
import {CustomButton, CustomImageBox} from '@components';
import {LuEdit as EditIcon, LuTrash2 as DeleteIcon} from 'react-icons/lu';
import {useRouter} from 'next/router';

type Props = {
  productsData: ProductType[];
};
type DiscountRatio = '0-25' | '25-50' | '50-75' | '75-100';

export default function AdminProducts({productsData}: Props) {
  const router = useRouter();
  const [products, setProducts] = useState<ProductType[]>(productsData);
  const [filters, setFilters] = useState<{
    search?: string;
    category?: Category;
    discount?: DiscountRatio;
  }>({});

  function onClickEdit(id: string) {
    router.push(`/admin/products/edit/${id}`);
  }

  function onChangeFilters(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.name === 'search') {
      setFilters({...filters, search: e.target.value});
    }
    if (e.target.name === 'category') {
      if (e.target.value === '-') {
        setFilters({...filters, category: undefined});
        return;
      }
      setFilters({...filters, category: e.target.value as Category});
    }
    if (e.target.name === 'discount') {
      if (e.target.value === '-') {
        setFilters({...filters, discount: undefined});
        return;
      }
      setFilters({...filters, discount: e.target.value as DiscountRatio});
    }
  }
  function onCleanFilters() {
    router.reload();
  }

  useEffect(() => {
    let filteredProducts = productsData;
    if (filters.search) {
      const search = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(search));
    }
    if (filters.category) {
      filteredProducts = filteredProducts.filter(product => product.category?.includes(filters.category));
    }
    if (filters.discount) {
      const [min, max] = filters.discount.split('-');
      filteredProducts = filteredProducts.filter(product => {
        const discount = product.discount?.discount_percentage || 0;
        return discount >= parseInt(min) && discount <= parseInt(max);
      });
    }
    setProducts(filteredProducts);
  }, [filters]);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  return (
    <div className={classes.container}>
      <div className={classes.filters}>
        <CustomButton className={classes.cleanButton} onClick={onCleanFilters}>
          Filtreleri Temizle
        </CustomButton>
        <div className={classes.search}>
          <label className={classes.searchlabel} htmlFor="search">
            Ürün Adı ile Ara
          </label>
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Ürün Ara"
            value={filters.search}
            onChange={e => setFilters({...filters, search: e.target.value})}
          />
        </div>
        <div className={classes.filter}>
          <label className={classes.filterLabel} htmlFor="categories">
            Kategori
          </label>
          <select
            name="category"
            id="category"
            placeholder="Kategori Seçiniz"
            className={classes.filterSelect}
            value={filters.category}
            onChange={onChangeFilters}>
            <option value="-">-</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </div>
        <div className={classes.filter}>
          <label className={classes.filterLabel} htmlFor="discount">
            İndirim Oranı
          </label>
          <select
            name="discount"
            id="discount"
            className={classes.filterSelect}
            value={filters.discount}
            onChange={onChangeFilters}>
            <option value="-">-</option>
            <option value="0-25">0-25</option>
            <option value="25-50">25-50</option>
            <option value="50-75">50-75</option>
            <option value="75-100">75-100</option>
          </select>
        </div>
      </div>
      <table className={classes.productsTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Brief</th>
            <th>Variants</th>
            <th>Aktif İndirim</th>
            <th>Category</th>
            {/* <th>Özellikler</th> */}
            <th></th> {/* Edit and Delete Buttons */}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className={classes.productRow}>
              <td>
                <CustomImageBox className={classes.thumbnail} src={product.variants[0].image} alt="Product Thumbnail" />
              </td>
              <td>{product.title}</td>
              <td>{product.brief}</td>
              <td>{product.variants.length}</td>
              <td>{'%' + (product.discount?.discount_percentage || 0)}</td>
              <td>{product.category?.join(',')}</td>
              {/* <td>{product.features?.join(',')}</td> */}
              <td>
                <CustomButton className={classes.editButton} onClick={() => onClickEdit(product.id)}>
                  <EditIcon />
                </CustomButton>
                {/* <CustomButton className={classes.deleteButton} onClick={() => setIsEditing(true)}>
                  <DeleteIcon />
                </CustomButton> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  const productsData = await getProducts();

  return {
    props: {
      productsData,
    },
  };
}
