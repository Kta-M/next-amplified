'use client';

import { useAuthenticator } from '@aws-amplify/ui-react';
import useAuthRedirect from '@/hooks/useAuthRedirect';

export default function SignOutButton() {
  useAuthRedirect({
    authhStatus: 'unauthenticated',
    redirectPath: '/sign_in',
  });

  const { signOut } = useAuthenticator();

  const handleClick = () => {
    signOut();
  };

  return <button onClick={handleClick}>Sign Out</button>;
}