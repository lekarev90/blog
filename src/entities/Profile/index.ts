export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  getProfileData, getProfileIsLoading, getProfileError, getProfileReadonly,
} from './model/selectors/profile.selectors';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { profileReducer, profileActions } from './model/slice/profileSlice';
export { IProfile, IProfileSchema } from './model/types/profile';
