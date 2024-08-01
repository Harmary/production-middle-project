export {
    Profile,
    ProfileSchema,
} from './model/types/types';

export {
    profileActions,
    profileReducer,
} from './model/slice/ProfileSlice';

export {
    selectProfileData,
} from './model/selectors/selectProfileData/selectProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
