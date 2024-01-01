import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticated } from '@/utils/amplifyServerUtils';

// 参考: https://nextjs.org/docs/app/building-your-application/routing/middleware
// リクエストを処理する前に実行される関数
export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const response = NextResponse.next();

  if (url.pathname === '/sign_in') {
    return response;
  }

  // ログインしているかどうかを取得
  const authenticated = await getAuthenticated({
    request,
    response,
  });

  if (authenticated) {
    return response;
  }

  // 未ログインの場合はサインインページにリダイレクト
  return NextResponse.redirect(new URL('/sign_in', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};