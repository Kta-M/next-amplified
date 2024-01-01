import { cookies } from 'next/headers';
import { getCurrentUser } from '@aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

// リクエストごとに動的レンダリングされるようにする設定
// 参考: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic';

// ログインユーザーを取得して表示するコンポーネント(サーバー側で実行)
export default async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });

    return (
      <div>
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}