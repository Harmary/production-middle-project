import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterState } from '../../slice/counterSlice';

export const getCounterValue = createSelector(
    getCounter,
    (counter : CounterState) => counter.value,
);
