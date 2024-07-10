import React, { FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Сделано в учебных целях
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
