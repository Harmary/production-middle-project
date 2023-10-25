import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR ='clear'
}
    
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{	
    className?: string;
    theme?: ThemeButton
}
    
export const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        ...otherProps
    } = props
    
    return <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}></button >;
}