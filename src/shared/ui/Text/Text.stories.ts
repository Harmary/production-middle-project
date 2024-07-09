import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProviders';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';

const meta: Meta = {
    title: 'Example/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj;

export const Light: Story = {
    args: {
        title: 'Lorem impsum dolor sit amet',
        text: 'Lorem impsum dolor sit amet',
    },
};

export const Error: Story = {
    args: {
        title: 'Lorem impsum dolor sit amet',
        text: 'Lorem impsum dolor sit amet',
        error: true,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Lorem impsum dolor sit amet',
        text: 'Lorem impsum dolor sit amet',
        error: true,
    },
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark: Story = {
    args: {
        title: 'Lorem impsum dolor sit amet',
        text: 'Lorem impsum dolor sit amet',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
