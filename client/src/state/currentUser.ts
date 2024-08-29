import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import type { User } from '@/types/user';

const currentUserAtom = atom<Partial<User> | undefined>({
  key: 'currentUser',
  default: undefined,
});

export const useGetCurrentUser = () => {
  const currentUser = useRecoilValue(currentUserAtom);

  return {
    currentUser,
  };
};

export const useSetCurrentUser = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);

  return {
    setCurrentUser,
  };
};
