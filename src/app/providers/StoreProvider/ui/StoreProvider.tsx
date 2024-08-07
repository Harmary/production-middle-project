import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

type StoreProviderProps = {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema> ;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
    const navigate = useNavigate();
    const store = createReduxStore(
        initialState as StateSchema,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
