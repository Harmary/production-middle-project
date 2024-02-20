import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';

const meta: Meta<typeof AppLink> = {
    title: 'Example/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.PRIMARY

    },
};

export const Secondary: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.SECONDARY

    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.PRIMARY

    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]


export const SecondaryDark: Story = {
    args: {
        children: 'AppLink',
        to: '/',
        theme: AppLinkTheme.SECONDARY

    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
