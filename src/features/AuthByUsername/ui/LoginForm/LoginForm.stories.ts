import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta = {
    title: 'Example/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
    args: {
    },
};
Light.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];
