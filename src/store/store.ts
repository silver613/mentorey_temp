// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
// import storage from 'redux-persist/lib/storage';
// import { useDispatch } from 'react-redux';
// import userSlice from '~/slices/userSlice'; // Import your userSlice
// // import filterSlice from '~/slices/filterSlice';

// const persistConfig = {
// 	key: 'root',
// 	version: 1,
// 	storage,
// };

// const persistedUserReducer = persistReducer(persistConfig, userSlice);
// // const persistedFilterReducer = persistReducer(persistConfig, filterSlice);

// export const store = configureStore({
// 	reducer: {
// 		userInfo: persistedUserReducer,
// 		// filterData: persistedFilterReducer,
// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// });

// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export default store;

// store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Use local storage for persisting data

// // Import your reducers here
// import userSlice from "~/slices/userSlice"; // Replace with your actual reducer import

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userSlice);

// const store = configureStore({
//   reducer: {
//     userInfo: persistedReducer, // Replace 'user' with your reducer name
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const persistor = persistStore(store);

// export default store;
import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import userSlice from "~/slices/userSlice";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [userSlice.name]: userSlice,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side

    const persistConfig = {
      key: "nextjs",
      whitelist: ["auth"], // make sure it does not clash with server keys
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== "production",
    });

    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
