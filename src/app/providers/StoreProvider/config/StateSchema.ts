import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterState } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { To, NavigateOptions } from 'react-router-dom';

export interface StateSchema {
    counter: CounterState;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type keyOfStateSchema = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    remove: (key: keyOfStateSchema) => void,
    add: (key: keyOfStateSchema, reducer: Reducer) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    readonly reducerManager: ReducerManager
}

export interface ThunkExtra {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T>{
    rejectValue: string;
    extra: ThunkExtra;
}
