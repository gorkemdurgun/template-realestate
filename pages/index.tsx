import React, {useEffect, useState} from 'react';

import {CustomText, FloatingWhatsappButton} from '@components';

import Head from 'next/head';
import {ProductType} from '@types';

import {getProducts} from '@services';
import {MainContainer} from 'layouts';

import classes from './index.module.scss';
import {SVG} from '@assets';
import Image from 'next/image';

type Props = {
  productsData: ProductType[];
};

export default function Home(props: Props) {
  const {productsData} = props;

  const [activeSection, setActiveSection] = useState('lansman');

  const LaunchSection = () => {
    return (
      <div className={classes.launchSection}>
        <div className={classes.launchCircle} />
        <div className={classes.leftSide}>
          <CustomText className={classes.heading} text="REAL ESTATE" />
          <CustomText className={classes.title} text="Hayalindeki evi bulacağın yer..." />
          <CustomText
            className={classes.description}
            text="Eşsiz mimariler, merkezi lokasyonlar, ayrıcalıklı yaşam alanları ve sosyal imkanlarla dolu projeleri keşfetmeye hazır mısın?"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <FloatingWhatsappButton />
      <MainContainer activeSection={activeSection}>
        <LaunchSection />
      </MainContainer>
    </>
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
