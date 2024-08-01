import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from 'entities/Profile/model/services/getProfileData';
import { ProfileCard, profileReducer } from '../../../entities/Profile';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage: React.FC = () => {
    const { t } = useTranslation('Profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
