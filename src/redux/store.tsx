/**
 * Redux Store
 */

 import thunk from 'redux-thunk';

 import {applyMiddleware} from 'redux';


// React Redux
import { 
    useDispatch,
    useSelector, 
    TypedUseSelectorHook 
} from 'react-redux';

// Redux Toolkit
import { 
    configureStore, EnhancedStore
} from '@reduxjs/toolkit';

// Crowstream
import rootReducer from './reducers';



const store: EnhancedStore = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch: () => AppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;