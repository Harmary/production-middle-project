import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta = {
    title: 'Example/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.PRIMARY,

    },
};

export const Secondary: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.SECONDARY,

    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.PRIMARY,

    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.SECONDARY,

    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
