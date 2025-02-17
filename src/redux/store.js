import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setLoginStatus } from './action';
import authReducer from './reducer';
// import authReducer from './authReducer';
// import { setLoginStatus } from './authActions';

// Configure persist settings
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// Auto logout after 30 days
store.subscribe(() => {
    const state = store.getState();
    if (state.isLoggedIn && state.loginTime) {
        const currentTime = Date.now();
        const THIRTY_DAYS = 24 * 60 * 60 * 1000; // 30 days in milliseconds
        if (currentTime - state.loginTime > THIRTY_DAYS) {
            store.dispatch(setLoginStatus(false));
        }
    }
});

export { store, persistor };
