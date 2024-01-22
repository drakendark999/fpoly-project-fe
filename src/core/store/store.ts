import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer';
import { PERSIST_CONFIG } from './persist';

const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  // reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
