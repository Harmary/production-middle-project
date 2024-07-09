import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextProps = {
    className?: string;
    text?: string;
    title?: string;
    error?: boolean;
}

export function Text({
    className, text, title, error,
}: TextProps) {
    const mods = {
        [cls.error]: error,
    };
    return (
        <div className={classNames(cls.TextWrapper, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}
