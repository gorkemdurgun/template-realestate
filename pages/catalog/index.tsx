import {getProducts} from '@services';
import React, {useEffect} from 'react';
import {ProductType} from '@types';

import classes from './index.module.scss';
import {Breadcrumb, ESTNavbar} from '@components';
import {MainContainer} from '@layouts';

type Props = {
  productsData: ProductType[];
};

export default function Catalog(props: Props) {
  const {productsData} = props;

  return (
    <MainContainer>
      <div className={classes.detail}>A</div>
    </MainContainer>
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
