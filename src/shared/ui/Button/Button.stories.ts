import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',

    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
