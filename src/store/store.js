import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
