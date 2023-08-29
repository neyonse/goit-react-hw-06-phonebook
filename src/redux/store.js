import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedAddContactReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // contacts: persistedAddContactReducer,
    filter: filterReducer,
  },
});

// export const persistor = persistStore(store);
