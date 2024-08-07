import { useStore } from 'react-redux';
import { keyOfStateSchema, ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { PropsWithChildren, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in keyOfStateSchema]?: Reducer;
}

type DynamicModuleLoaderProps = {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export function DynamicModuleLoader(props: PropsWithChildren<DynamicModuleLoaderProps>) {
    const {
        reducers, children, removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as keyOfStateSchema, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as keyOfStateSchema);
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}
