import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import NextAuthProviders from '@/utils/nextAuthProviders';
import './globals.css';

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className={josefinSans.className}>
        <NextAuthProviders>{children}</NextAuthProviders>
      </body>
    </html>
  );
}
