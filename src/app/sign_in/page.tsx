import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAuthenticated } from '@/utils/amplifyServerUtils';
import AuthenticatorClient from '@/components/auth/client/AuthenticatorClient';

export default async function Home() {
  const authenticated = await getAuthenticated({ cookies });

  if (authenticated) {
    redirect('/');
  }

  return (
    <main>
      <h1>Hello, Next.js App</h1>
      <AuthenticatorClient />
    </main>
  );
}