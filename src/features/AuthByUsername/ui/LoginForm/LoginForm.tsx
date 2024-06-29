import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
    className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t('Login')} label={t('Login')} />
            <Input placeholder={t('Password')} label={t('Password')} />
            <Button className={cls.loginBtn}>{t('Submit')}</Button>
        </div>
    );
}
