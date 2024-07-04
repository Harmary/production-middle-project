import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputVariants } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';

const meta: Meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        placeholder: 'Test',
        label: 'Test',
        variant: InputVariants.FILLED,
    },
};

export const Filled_dark: Story = {
    args: {
        placeholder: 'Test',
        label: 'Test',
        variant: InputVariants.FILLED,
    },
};

Filled_dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
    args: {
        placeholder: 'Test',
        label: 'Test',
        variant: InputVariants.OUTLILNED,
    },
};

export const Outlined_dark: Story = {
    args: {
        placeholder: 'Test',
        label: 'Test',
        variant: InputVariants.OUTLILNED,
    },
};

Outlined_dark.decorators = [ThemeDecorator(Theme.DARK)];
