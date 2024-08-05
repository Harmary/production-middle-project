import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUserName';
import cls from './LoginForm.module.scss';

export type LoginFormProps = {
    className?: string;
    onSuccess?: () => void
}

const initialReducers = { loginForm: loginReducer };

const LoginForm = memo(({ className = '', onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authtorization')} />
                {error && <Text text={error} error />}
                <Input
                    placeholder={t('Login')}
                    label={t('Login')}
                    inverted
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    placeholder={t('Password')}
                    label={t('Password')}
                    inverted
                    onChange={onChangePassword}
                    value={password}
                />
                <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
                    {t('Submit')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
