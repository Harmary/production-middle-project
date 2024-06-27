import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Sidebar } from './Sidebar';

const meta: Meta = {
    title: 'Example/Sidebar',
    component: Sidebar,
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

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
