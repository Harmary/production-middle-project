import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Input, InputVariants } from './Input';

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

export const FilledDark: Story = {
    args: {
        placeholder: 'Test',
        label: 'Test',
        variant: InputVariants.FILLED,
    },
};

FilledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
    args: {
        placeholder: 'Test',
        label: 'Test',
        variant: InputVariants.OUTLILNED,
    },
};

export const OutlinedDark: Story = {
    args: {
        placeholder: 'Test',
        label: 'Test',
        variant: InputVariants.OUTLILNED,
    },
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
