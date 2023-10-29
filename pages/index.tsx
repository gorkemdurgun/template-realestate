import React, {MutableRefObject, useEffect, useState} from 'react';

import {
  CustomButton,
  CustomText,
  FloatingWhatsappButton,
  LaunchSection,
  QuakeAnalysisSection,
  RecentlyAddedSection,
} from '@components';

import {FaSearch as SearchIcon, FaArrowRight as ArrowRightIcon} from 'react-icons/fa';

import Head from 'next/head';

import {checkFirebaseConnection, getNoticesHouse} from '@services';
import {MainContainer} from 'layouts';

import classes from './index.module.scss';
import Image from 'next/image';
import {NoticeHouseCard} from '@components';
import {animated, useScroll, useSpring} from '@react-spring/web';

type Props = {
  noticesData: ApartmentProperties[];
};

export default function Home(props: Props) {
  const {noticesData} = props;

  const [activeSection, setActiveSection] = useState('lansman');
  const [notices, setNotices] = useState<ApartmentProperties[]>([]);

  useEffect(() => {
    checkFirebaseConnection();
    getNoticesHouse().then(res => {
      setNotices(res);
    });
  }, []);

  const mainRef = React.useRef<HTMLDivElement>(null);

  const [listAnimationStyles, listAnimationApi] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(100px)',
  }));
  const [quakeAnalysisSectionAnimationStyles, quakeAnalysisSectionAnimationApi] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(100px)',
  }));

  useScroll({
    container: mainRef as MutableRefObject<HTMLDivElement>,
    onChange: ({value: {scrollYProgress}}) => {
      if (scrollYProgress > 0.1) {
        listAnimationApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
        });
      }
      if (scrollYProgress > 0.6) {
        quakeAnalysisSectionAnimationApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
        });
      }
    },
  });

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
        <RecentlyAddedSection
          listAnimationStyle={listAnimationStyles}
          notices={notices.concat(notices).concat(notices)}
        />
        <QuakeAnalysisSection sectionAnimationStyle={quakeAnalysisSectionAnimationStyles} />
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
