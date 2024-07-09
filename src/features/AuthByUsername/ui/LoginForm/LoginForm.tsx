import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/LoginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUserName';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
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
    );
});
