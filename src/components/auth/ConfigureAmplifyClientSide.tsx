'use client';

import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json';

// クライアント向けにAmplify設定を読み込み、クライアントからAmplify Backendにアクセスできるようにする。
// Amplify.configureを1回実行したいだけなので、ConfigureAmplifyClientSideコンポーネントをルートレイアウトに配置する。
Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}