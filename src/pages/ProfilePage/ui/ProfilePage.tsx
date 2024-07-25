import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from '../../../entities/Profile';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage: React.FC = () => {
    const { t } = useTranslation('Profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>{t('Profile')}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
