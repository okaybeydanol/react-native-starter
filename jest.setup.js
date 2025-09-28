jest.mock('redux-persist', () => {
  const actualReduxPersist = jest.requireActual('redux-persist');
  return {
    ...actualReduxPersist,
    persistReducer: jest.fn((_, reducer) => reducer),
    persistStore: jest.fn().mockImplementation(() => ({
      subscribe: jest.fn(),
      getState: jest.fn().mockReturnValue({ bootstrapped: true }),
      purge: jest.fn().mockResolvedValue(null),
      flush: jest.fn().mockResolvedValue(null),
      pause: jest.fn(),
      persist: jest.fn(),
      dispatch: jest.fn(),
    })),
    createMigrate: jest.fn(() => jest.fn()),
    createTransform: jest.fn((inbound, outbound) => ({
      in: inbound || (data => data),
      out: outbound || (data => data),
    })),
  };
});

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: i18nKey => i18nKey,
      i18n: {
        changeLanguage: jest.fn(),
        language: 'en',
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));
