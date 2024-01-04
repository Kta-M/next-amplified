import { cookieBasedClient } from '@/utils/amplifyServerUtils';
import { listUsers } from '@/graphql/queries';

export default async function UserList() {
  const { data, errors } = await cookieBasedClient.graphql({
    query: listUsers,
  });

  console.log('data', data);

  if (errors) {
    console.log('errors', errors);
  }

  return (
    <div>
      {data.listUsers.length === 0 ? (
        <p>No users.</p>
      ) : (
        <ul>
          {data.listUsers.map((item: any) => (
            <li key={item.id}>{item.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}