import type { Preview } from '@storybook/react';
import React from 'react';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { Theme } from '../../src/app/providers/ThemeProviders';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <Story />
        ),
        ThemeDecorator(Theme.LIGHT),
        RouteDecorator,
    ],
};

export default preview;
