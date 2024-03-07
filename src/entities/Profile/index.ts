export { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  getProfileData, getProfileIsLoading, getProfileError,
} from './model/selectors/profile.selectors';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { profileReducer, profileActions } from './model/slice/profileSlice';
export { IProfile, IProfileSchema } from './model/types/profile';
