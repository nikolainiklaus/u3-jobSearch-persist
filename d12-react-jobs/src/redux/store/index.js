import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReducer from "../reducers/errors";
import favouriteReducer from "../reducers/favourite";
import jobReducer from "../reducers/job";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ], // this brings the whole redux store into persistency
};

const combinedReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
  error: errorReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // this shuts off the checking of non-serializable values in actions
    });
  },
});

const persistedStore = persistStore(store);
export { store, persistedStore };
