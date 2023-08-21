import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import TravelReducer from '../store/Slice'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, TravelReducer)

export const store = configureStore({
    reducer: {Travel:persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  export let persistor = persistStore(store)