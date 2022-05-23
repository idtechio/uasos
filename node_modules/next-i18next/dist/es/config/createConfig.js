import { defaultConfig } from './defaultConfig';
const deepMergeObjects = ['backend', 'detection'];
export const createConfig = userConfig => {
  var _userConfig$use;

  if (typeof (userConfig === null || userConfig === void 0 ? void 0 : userConfig.lng) !== 'string') {
    throw new Error('config.lng was not passed into createConfig');
  } //
  // Initial merge of default and user-provided config
  //


  const {
    i18n: userI18n,
    ...userConfigStripped
  } = userConfig;
  const {
    i18n: defaultI18n,
    ...defaultConfigStripped
  } = defaultConfig;
  const combinedConfig = { ...defaultConfigStripped,
    ...userConfigStripped,
    ...defaultI18n,
    ...userI18n
  };
  const {
    defaultNS,
    lng,
    locales,
    localeExtension,
    localePath,
    localeStructure
  } = combinedConfig;
  /**
   * Skips translation file resolution while in cimode
   * https://github.com/isaachinman/next-i18next/pull/851#discussion_r503113620
  */

  if (lng === 'cimode') {
    return combinedConfig;
  }

  if (typeof combinedConfig.fallbackLng === 'undefined') {
    combinedConfig.fallbackLng = combinedConfig.defaultLocale;
  }

  const hasCustomBackend = userConfig === null || userConfig === void 0 ? void 0 : (_userConfig$use = userConfig.use) === null || _userConfig$use === void 0 ? void 0 : _userConfig$use.some(b => b.type === 'backend');

  if (!process.browser && typeof window === 'undefined') {
    combinedConfig.preload = locales;

    if (!hasCustomBackend) {
      const fs = require('fs');

      const path = require('path'); //
      // Validate defaultNS
      // https://github.com/isaachinman/next-i18next/issues/358
      //


      if (typeof defaultNS === 'string' && typeof lng !== 'undefined') {
        if (typeof localePath === 'string') {
          var _userConfig$interpola, _userConfig$interpola2;

          const prefix = (userConfig === null || userConfig === void 0 ? void 0 : (_userConfig$interpola = userConfig.interpolation) === null || _userConfig$interpola === void 0 ? void 0 : _userConfig$interpola.prefix) ?? '{{';
          const suffix = (userConfig === null || userConfig === void 0 ? void 0 : (_userConfig$interpola2 = userConfig.interpolation) === null || _userConfig$interpola2 === void 0 ? void 0 : _userConfig$interpola2.suffix) ?? '}}';
          const defaultLocaleStructure = localeStructure.replace(`${prefix}lng${suffix}`, lng).replace(`${prefix}ns${suffix}`, defaultNS);
          const defaultFile = `/${defaultLocaleStructure}.${localeExtension}`;
          const defaultNSPath = path.join(localePath, defaultFile);
          const defaultNSExists = fs.existsSync(defaultNSPath);

          if (!defaultNSExists && process.env.NODE_ENV !== 'production') {
            throw new Error(`Default namespace not found at ${defaultNSPath}`);
          }
        } else if (typeof localePath === 'function') {
          const defaultNSPath = localePath(lng, defaultNS, false);
          const defaultNSExists = fs.existsSync(defaultNSPath);

          if (!defaultNSExists && process.env.NODE_ENV !== 'production') {
            throw new Error(`Default namespace not found at ${defaultNSPath}`);
          }
        }
      } //
      // Set server side backend
      //


      if (typeof localePath === 'string') {
        combinedConfig.backend = {
          addPath: path.resolve(process.cwd(), `${localePath}/${localeStructure}.missing.${localeExtension}`),
          loadPath: path.resolve(process.cwd(), `${localePath}/${localeStructure}.${localeExtension}`)
        };
      } else if (typeof localePath === 'function') {
        combinedConfig.backend = {
          addPath: (locale, namespace) => localePath(locale, namespace, true),
          loadPath: (locale, namespace) => localePath(locale, namespace, false)
        };
      } else {
        throw new Error(`Unsupported localePath type: ${typeof localePath}`);
      } //
      // Set server side preload (namespaces)
      //


      if (!combinedConfig.ns && typeof lng !== 'undefined') {
        if (typeof localePath === 'function') {
          throw new Error('Must provide all namespaces in ns option if using a function as localePath');
        }

        const unique = list => Array.from(new Set(list));

        const getNamespaces = locales => {
          const getLocaleNamespaces = p => fs.readdirSync(p).map(file => file.replace(`.${localeExtension}`, ''));

          const namespacesByLocale = locales.map(locale => getLocaleNamespaces(path.resolve(process.cwd(), `${localePath}/${locale}`)));
          const allNamespaces = [];

          for (const localNamespaces of namespacesByLocale) {
            allNamespaces.push(...localNamespaces);
          }

          return unique(allNamespaces);
        };

        const getAllLocales = (lng, fallbackLng) => {
          if (typeof fallbackLng === 'string') {
            return unique([lng, fallbackLng]);
          }

          if (Array.isArray(fallbackLng)) {
            return unique([lng, ...fallbackLng]);
          }

          if (typeof fallbackLng === 'object') {
            const flattenedFallbacks = Object.values(fallbackLng).reduce((all, fallbackLngs) => [...all, ...fallbackLngs], []);
            return unique([lng, ...flattenedFallbacks]);
          }

          return [lng];
        };

        combinedConfig.ns = getNamespaces(getAllLocales(lng, combinedConfig.fallbackLng));
      }
    }
  } else {
    //
    // Set client side backend, if there is no custom backend
    //
    if (!hasCustomBackend) {
      if (typeof localePath === 'string') {
        combinedConfig.backend = {
          addPath: `${localePath}/${localeStructure}.missing.${localeExtension}`,
          loadPath: `${localePath}/${localeStructure}.${localeExtension}`
        };
      } else if (typeof localePath === 'function') {
        combinedConfig.backend = {
          addPath: (locale, namespace) => localePath(locale, namespace, true),
          loadPath: (locale, namespace) => localePath(locale, namespace, false)
        };
      }
    }

    if (typeof combinedConfig.ns !== 'string' && !Array.isArray(combinedConfig.ns)) {
      combinedConfig.ns = [defaultNS];
    }
  } //
  // Deep merge with overwrite - goes last
  //


  deepMergeObjects.forEach(obj => {
    if (userConfig[obj]) {
      combinedConfig[obj] = { ...combinedConfig[obj],
        ...userConfig[obj]
      };
    }
  });
  return combinedConfig;
};