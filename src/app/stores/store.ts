import filmsReducer from '../../store/reducers/films/films';
import userReducer from '../../store/reducers/user/user';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        films: filmsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
