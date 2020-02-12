
import rootReducer from './../redux/rootReducer'
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const store = createStore(persistedReducer,
     composeEnhancers(
  applyMiddleware(thunk))
);
let persistor = persistStore(store);

export  { store, persistor };