import type { Metadata } from 'next';
import NextAuthProviders from '@/utils/nextAuthProviders';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import SessionCheck from '@/components/SessionCheck/SessionCheck';
import DesktopHeader from '@/components/Header/DesktopHeader';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Applaudify',
  description: 'Where Achievements Get Applauded',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <NextAuthProviders>
          <SessionCheck />
          <DesktopHeader />
          {children}
          <p className="small text-center text-stone mt-20">
            © 2023 Applaudify
          </p>
        </NextAuthProviders>
      </body>
    </html>
  );
}
