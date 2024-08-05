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
    inverted?: boolean
}

export function Input(props: InputProps) {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        variant = InputVariants.OUTLILNED,
        placeholder = '',
        label,
        fullWidth = false,
        inverted = false,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const mods: Record<string, boolean> = {
        [cls[variant]]: true,
        // eslint-disable-next-line dot-notation
        [cls['inverted']]: inverted,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <input
                className={cls.Input}
                style={{
                    width: fullWidth ? '100%' : '400px',
                }}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            />
            {
                !!label
                && (
                    <label
                        htmlFor={label}
                        className={cls.InputLabel}
                    >
                        {label}
                    </label>
                )
            }
        </div>
    );
}
