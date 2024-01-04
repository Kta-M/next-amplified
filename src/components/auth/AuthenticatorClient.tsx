'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import '@aws-amplify/ui-react/styles.css';

export default function AuthenticatorClient() {
  useAuthRedirect({
    authhStatus: 'authenticated',
    redirectPath: '/',
  });

  return <Authenticator hideSignUp={true} />;
}
