import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta: Meta = {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
};

Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
