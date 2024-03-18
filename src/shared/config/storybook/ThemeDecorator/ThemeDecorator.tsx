import { Theme } from 'app/providers/ThemeProviders';

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
