import CurrentUser from '@/components/CurrentUser';
import SignOutButton from '@/components/SignOutButton';
import UserList from '@/components/UserList';

export default async function Home() {
  return (
    <main>
      <CurrentUser />
      <SignOutButton />
      <UserList />
    </main>
  );
}