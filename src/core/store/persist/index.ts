// import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/es/storage';
import sessionStorage from 'redux-persist/es/storage/session';

export const PERSIST_CONFIG = {
  key: 'root',
  storage: sessionStorage,
  // whitelist: ['session'], // save specific reducers
  blacklist: ['account'], // don't save specific reducers
};
