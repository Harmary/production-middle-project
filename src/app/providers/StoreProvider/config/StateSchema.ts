import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterState } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterState;
    user: UserSchema;
    loginForm?: LoginSchema;
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
