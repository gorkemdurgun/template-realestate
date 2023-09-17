import '../src/styles/global.css';
import 'normalize.css';

import '../i18n';
import {I18nextProvider} from 'react-i18next';
import i18n from '../i18n';

/* eslint-disable */
export default function App({Component, pageProps}) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}
