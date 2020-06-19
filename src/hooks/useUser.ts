import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

type User = {
  fullName: string;
};

type UseUser = {
  redirectIfFound?: boolean;
  redirectTo?: string;
};

const fetcher = async (url: string): Promise<User> => {
  const result = await fetch(url);
  const { user } = await result.json();

  return user;
};

export const useUser = ({ redirectIfFound, redirectTo }: UseUser = {}) => {
  const router = useRouter();
  const { data, error } = useSWR('/api/user', fetcher);
  const user = data;
  const finished = !!data;
  const hasUser = !!user;

  useEffect(() => {
    if (!finished || !redirectTo) {
      return;
    }

    if (
      // Redirect if user was found and redirectIfFound is set.
      (hasUser && redirectIfFound) ||
      // Redirect if user was not found, and redirectTo is set.
      (!hasUser && !redirectIfFound && redirectTo)
    ) {
      router.push(redirectTo);
    }
  }, [finished, hasUser, redirectIfFound, redirectTo]);

  return error ? null : user;
};
