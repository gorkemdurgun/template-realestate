import React, {useEffect, useState} from 'react';

import classes from './index.module.scss';

import Contacts from './contacts';
import Products from './products';
import {CustomButton, CustomImageBox, CustomText} from '@components';
import {getProducts} from '@services';
import {SVG} from '@assets';
import {LuMessageSquareDashed as AdminIcon, LuListTree as ProductsIcon} from 'react-icons/lu';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res);
    });
  }, []);

  const AdminSidebar = () => {
    return (
      <div className={classes.sidebar}>
        <div className={classes.logoContainer}>
          <CustomImageBox className={classes.logo} src={SVG.LogoPetneedings} alt="Logo" />
          <CustomText className={classes.text} text="PN Admin" />
        </div>
        <CustomButton className={classes.sidebarButton} onClick={() => setActiveTab('contacts')}>
          <AdminIcon className={classes.icon} />
          <CustomText className={classes.text} text="Contacts" />
        </CustomButton>
        <CustomButton className={classes.sidebarButton} onClick={() => setActiveTab('products')}>
          <ProductsIcon className={classes.icon} />
          <CustomText className={classes.text} text="Products" />
        </CustomButton>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <AdminSidebar />
      <div className={classes.content}>
        {activeTab === 'contacts' && <Contacts />}
        {activeTab === 'products' && <Products productsData={products} />}
      </div>
    </div>
  );
}
