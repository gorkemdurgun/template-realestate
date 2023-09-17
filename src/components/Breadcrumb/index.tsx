import {CustomButton, CustomText} from '@components';
import {useRouter} from 'next/router';

import classes from './index.module.scss';

export const Breadcrumb = () => {
  const router = useRouter();
  const {pathname} = router;

  const PathButton = ({text, path}: {text: string; path: string}) => (
    <CustomButton className={classes.breadcrumbItem} onClick={() => router.push(path)}>
      <CustomText className={classes.text} text={decodeURIComponent(text)} />
    </CustomButton>
  );

  const pathList = pathname.split('/').filter(path => path !== '');
  const title = pathList[pathList.length - 1];

  return (
    <div className={classes.breadcrumbList}>
      {pathList.map((path, index) => (
        <PathButton key={index} text={path} path={`/${pathList.slice(0, index + 1).join('/')}`} />
      ))}
    </div>
  );
};
