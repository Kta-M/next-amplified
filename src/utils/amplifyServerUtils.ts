import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import config from '@/amplifyconfiguration.json';
import { cookies } from 'next/headers';

// 参考: https://docs.amplify.aws/react/build-a-backend/server-side-rendering/nextjs/
// サーバーからAmplifyのAPIを呼び出すため関数
export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

type NextServerContext = Parameters<
  typeof runWithAmplifyServerContext
>[0]['nextServerContext'];

// ログインしているかどうかを取得する関数
export const getAuthenticated = async (
  nextServerContext: NextServerContext
) => {
  return await runWithAmplifyServerContext({
    nextServerContext,
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        // ログインしていない状態でfetchAuthSessionを呼び出すとここに来る
        return false;
      }
    },
  });
};

// GraphQLクライアント
export const cookieBasedClient = generateServerClientUsingCookies({
  config,
  cookies,
});