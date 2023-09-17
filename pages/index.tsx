import React, {useEffect, useState} from 'react';

import {
  CatalogGrid,
  ContactUsSection,
  CustomButton,
  CustomImageBox,
  CustomNavbar,
  CustomText,
  FloatingWhatsappButton,
  Footer,
  MagicBanner,
  MainContainer,
  WelcomeSection,
} from '@components';

import classes from './index.module.scss';
import Head from 'next/head';
import {ProductType} from '@types';

import {getProducts} from '@services';
import {AboutUsSection} from 'components/basis-about/AboutUsSection';

type Props = {
  productsData: ProductType[];
};

export default function Home(props: Props) {
  const {productsData} = props;

  const [activeSection, setActiveSection] = useState('lansman');

  function handleScroll() {
    const lansman = document.getElementById('lansman');
    const catalog = document.getElementById('catalog');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');

    const navbarHeight = 130;
    const tolerance = 100;

    if (lansman && catalog && about && contact) {
      const lansmanTop = lansman.offsetTop - navbarHeight - tolerance;
      const catalogTop = catalog.offsetTop - navbarHeight - tolerance;
      const aboutTop = about.offsetTop - navbarHeight - tolerance;
      const contactTop = contact.offsetTop - navbarHeight - tolerance;

      const scrollPosition = window.scrollY;

      if (scrollPosition >= lansmanTop && scrollPosition < catalogTop) {
        setActiveSection('lansman');
      } else if (scrollPosition >= catalogTop && scrollPosition < aboutTop) {
        setActiveSection('catalog');
      } else if (scrollPosition >= aboutTop && scrollPosition < contactTop) {
        setActiveSection('about');
      } else if (scrollPosition >= contactTop) {
        setActiveSection('contact');
      }
    }
  }

  // scroll position listener
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Petneedings</title>
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
        <WelcomeSection id="lansman" />
        <MagicBanner />
        <CatalogGrid id="catalog" title="Our Products" list={productsData} />
        <AboutUsSection id="about" />
        <ContactUsSection id="contact" />
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
