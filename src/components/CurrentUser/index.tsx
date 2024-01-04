import { cookies } from 'next/headers';
import { getCurrentUser } from '@aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

// リクエストごとに動的レンダリングされるようにする設定
// 参考: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic';

// ログインユーザーを取得して表示するコンポーネント(サーバー側で実行)
export default async function CurrentUser() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });

    return (
      <div>
        User: {currentUser?.username ?? 'Unknown'}
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}