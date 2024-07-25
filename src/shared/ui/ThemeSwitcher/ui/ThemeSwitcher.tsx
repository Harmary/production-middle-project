import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProviders';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LightTheme from 'shared/assets/icons/lightTheme.svg';
import DarkTheme from 'shared/assets/icons/darkTheme.svg';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = React.memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
});
