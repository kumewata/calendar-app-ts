import '@/plugins/composition-api';
import '@vue/composition-api';
import { Profile } from '@/store/profile.model';
import { reactive } from '@vue/composition-api';
import { update } from './shared-user';

export const profileMockData: Profile = {
  userId: '66006b29-727e-4ed8-a3c8-95d4438f66d4',
  userName: 'naminami',
  nickname: '波平',
  themeColor: '#4caf50',
  hasAvatar: false,
  mailAddress: 'namihei@example.com',
};

export const profileStore = reactive({ profile: null as Profile | null });

export const updateUserName = (userName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.userName = userName;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};

export const updateNickname = (nickname: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.nickname = nickname;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};

export const updateThemeColor = (themeColor: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  profileStore.profile!.themeColor = themeColor;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  update(profileStore.profile!);
};
