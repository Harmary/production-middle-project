import { classNames } from 'shared/lib/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProviders';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightTheme from 'shared/assets/icons/lightTheme.svg';
import DarkTheme from 'shared/assets/icons/darkTheme.svg';
import cls from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
}
