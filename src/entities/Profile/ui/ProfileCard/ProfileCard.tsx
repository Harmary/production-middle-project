import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { selectProfileData } from 'entities/Profile';
import cls from './ProfileCard.module.scss';

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(selectProfileData);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <Text title={t('Profile')} />
            <Button theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
            <Text text={`${t('First name')} : ${data?.name}`} />
            <Text text={`${t('Last name')} : ${data?.lastname}`} />
        </div>
    );
};
