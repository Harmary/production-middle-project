import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta = {
    title: 'Example/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
