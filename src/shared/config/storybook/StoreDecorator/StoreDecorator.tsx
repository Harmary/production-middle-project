import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoryObj } from '@storybook/react/*';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: any) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
