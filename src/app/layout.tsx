import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';

import ConfigureAmplifyClientSide from '@/components/auth/ConfigureAmplifyClientSide';
import AuthProvider from '@/components/auth/AuthProvider';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={notoSansJp.className}>
        <ConfigureAmplifyClientSide />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}