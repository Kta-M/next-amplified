import AuthGetCurrentUserServer from '@/components/auth/server/AuthGetCurrentUserServer';
import SignOutButton from '@/components/SignOutButton';

export default async function Home() {
  return (
    <main>
      <AuthGetCurrentUserServer />
      <SignOutButton />
    </main>
  );
}