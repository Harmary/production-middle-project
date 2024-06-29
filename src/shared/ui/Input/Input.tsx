import { classNames } from 'shared/lib';
import React, { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputVariants {
    OUTLILNED = 'outlined',
    FILLED = 'filled',
}

interface InputProps extends HTMLInputProps {
    className?: string;
    variant?: InputVariants;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    fullWidth?: boolean
}

export function Input(props: InputProps) {
    const {
        className,
        value,
        onChange,
        type = 'text',
        variant = InputVariants.OUTLILNED,
        placeholder = '',
        label,
        fullWidth = false,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const mods: Record<string, boolean> = {
        [cls[variant]]: true,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {
                !!label
                && (
                    <label
                        htmlFor={label}
                        className={classNames(cls.InputLabel)}
                    >
                        {label}
                    </label>
                )
            }
            <input
                className={classNames(cls.Input)}
                style={fullWidth ? { width: '100%' } : { width: '400px' }}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );
}
