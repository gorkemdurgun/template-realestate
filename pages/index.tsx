import React, {useEffect, useState} from 'react';

import {CustomText, FloatingWhatsappButton} from '@components';

import {FaSearch as SearchIcon} from 'react-icons/fa';

import Head from 'next/head';

import {checkFirebaseConnection, getNoticesHouse} from '@services';
import {MainContainer} from 'layouts';

import classes from './index.module.scss';
import Image from 'next/image';

type Props = {
  noticesData: HouseProperties[];
};

export default function Home(props: Props) {
  const {noticesData} = props;

  const [activeSection, setActiveSection] = useState('lansman');

  const dummyImage =
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  useEffect(() => {
    checkFirebaseConnection();
  }, []);

  const LaunchSection = () => {
    return (
      <div className={classes.launchSection}>
        <div className={classes.launchCircle} />

        <div className={classes.leftSide}>
          <span className={classes.texts}>
            <CustomText className={classes.heading} text="REAL ESTATE" />
            <CustomText className={classes.title} text="Hayalindeki evi bulacağın yer..." />
            <CustomText
              className={classes.description}
              text="Eşsiz mimariler, merkezi lokasyonlar, ayrıcalıklı yaşam alanları ve sosyal imkanlarla dolu projeleri keşfetmeye hazır mısın?"
            />
          </span>
          <div className={classes.searchBar}>
            <input className={classes.searchInput} type="text" placeholder="Ara..." />
          </div>
        </div>
        <div className={classes.rightSide}>
          <div className={classes.imageWrapper}>
            <Image className={classes.image} src={dummyImage} alt="launch" layout="fill" objectFit="cover" />
          </div>
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
  const noticesData = await getNoticesHouse();

  return {
    props: {
      noticesData,
    },
  };
}
