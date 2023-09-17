import React from 'react';

import {CustomImageBox, CustomText} from '@components';
import classes from './index.module.scss';

import {
  LuBiohazard as AntibacterialIcon,
  LuShieldCheck as QualityIcon,
  LuThumbsUp as SatisfactionIcon,
  LuGlobe2 as WorldwideIcon,
  LuPackageCheck as ProductionIcon,
  LuPercent as DiscountIcon,
  LuBaggageClaim as DeliveryIcon,
  LuPhoneForwarded as SupportIcon,
} from 'react-icons/lu';
import {JPG, SVG} from '@assets';

type Props = {
  id: string;
};

const descriptions = [
  `Merhaba, biz Petneedings ailisiyiz. Evcil hayvanlarınızın ihtiyaçlarını sağlamak için kurulduk. Evcil hayvanlarınızın ihtiyaçlarına yönelik ürünler üretiyoruz. Ürünlerimizi üretirken evcil hayvanlarınızın sağlığını ve konforunu göz önünde bulunduruyoruz.`,
  `Ürünlerimizin kalitesi ve güvenilirliği konusunda asla taviz vermiyoruz. Malzemelerimiz en kaliteli hammaddelerden üretiyoruz.`,
  `Şirket politikamız gereği müşterilerimizin memnuniyeti bizim için her şeyden önemli. Müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Bu yüzden müşteri hizmetlerimiz ile mesai saatleri içerisinde Türkçe ve İngilizce olarak hizmetinizdeyiz.`,
  `İmalatını gerçekleştirdiğimiz ürünleri sizlere en uygun fiyatlarla sunuyoruz. Fiyat/Performans optimizasyonu ile ürünlerimizi geliştiriyoruz.`,
];

const dummyMatters = [
  {
    icon: <AntibacterialIcon className={classes.icon} />,
    title: 'Antibakteriyel Ürünler',
    description: `Onların sağlığı çok önemli. Bu yüzden antibakteriyel ürünler üretiyoruz.`,
  },
  {
    icon: <QualityIcon className={classes.icon} />,
    title: 'Kalite ve Güvenilirlik',
    description: 'Kalite konusunda asla taviz vermiyoruz. Kaliteli hammaddelerden üretiyoruz.',
  },
  {
    icon: <SatisfactionIcon className={classes.icon} />,
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizin memmnuniyetine önem veriyoruz. En iyi hizmeti sunmak için çalışıyoruz.',
  },
  // {
  //   icon: <WorldwideIcon className={classes.icon} />,
  //   title: 'Dünya Çapında Hizmet',
  //   description: 'Tüm dünyaya ürünlerimizi ulaştırıyoruz. Dünya çapında hizmet veriyoruz.',
  // },
  {
    icon: <ProductionIcon className={classes.icon} />,
    title: 'İmalatçıdan Tüketiciye',
    description: 'Aradaki tüm aracıları ortadan kaldırıyoruz. Kendi ürettiğimiz ürünleri sizlere sunuyoruz.',
  },
  {
    icon: <DeliveryIcon className={classes.icon} />,
    title: 'Ücretsiz Teslimat Fırsatı',
    description: 'Seçili ürünlerimizde ücretsiz teslimat fırsatı sunuyoruz.',
  },
  {
    icon: <SupportIcon className={classes.icon} />,
    title: 'Müşteri Hizmetleri Desteği',
    description: 'Destek hattımız ile Türkçe ve İngilizce olarak hizmetinizdeyiz.',
  },
  // {
  //   icon: <DiscountIcon className={classes.icon} />,
  //   title: 'İndirimler',
  //   description: 'Devamlı müşterilerimize özel indirimler sunuyoruz.',
  // },
];

const AboutUsSection: React.FC<Props> = props => {
  const {id} = props;

  return (
    <div id={id} className={classes.aboutUsSection}>
      <div className={classes.topSide}>
        <span className={classes.title}>
          <CustomText className={classes.text} text="Neden Biz?" />
        </span>
        <div className={classes.matters}>
          {dummyMatters.map((matter, index) => (
            <div key={index} className={classes.matter}>
              <div className={classes.matterHeader}>
                <CustomText className={classes.matterTitle} text={matter.title} />
                <div className={classes.matterIcon}>{matter.icon}</div>
              </div>
              <CustomText className={classes.matterDescription} text={matter.description} />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.bottomSide}>
        <span className={classes.title}>
          <CustomText className={classes.text} text="Biz Kimiz?" />
        </span>
        <div className={classes.contentGrid}>
          <span className={classes.descriptionBox}>
            {descriptions.map((description, index) => (
              <CustomText key={index} className={classes.text} text={description} />
            ))}
          </span>
          <CustomImageBox className={classes.imageBox} src={JPG.PNLogo} objectFit="contain" alt="About Us" />
        </div>
      </div>
    </div>
  );
};
export {AboutUsSection};
