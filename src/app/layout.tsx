import type { Metadata } from 'next';
import NextAuthProviders from '@/utils/nextAuthProviders';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';

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
    <html lang='en'>
      <body className={josefin.className}>
        <NextAuthProviders>{children}</NextAuthProviders>
      </body>
    </html>
  );
}
