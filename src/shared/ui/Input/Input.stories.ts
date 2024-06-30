import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputVariants } from './Input';

const meta: Meta = {
    title: 'Example/Button',
    component: Input,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj;

export const Filled: Story = {
    args: {
        placeholder: 'test',
        label: 'test',
        variant: InputVariants.FILLED,
    },
};

export const Outlined: Story = {
    args: {
        placeholder: 'test',
        label: 'test',
        variant: InputVariants.OUTLILNED,
    },
};
