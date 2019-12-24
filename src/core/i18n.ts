import i18n from 'i18next';

import { en, vi } from '../locales';

i18n.init({
  keySeparator: '>',
  nsSeparator: '|',
  lng: 'vi',
  resources: {
    en: {
      common: en,
    },
    vi: {
      common: vi,
    },
  },
  ns: ['common'],
  defaultNS: 'common',
});

export { i18n };
