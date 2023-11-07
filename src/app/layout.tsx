import type { Metadata } from 'next';
import NextAuthProviders from '@/utils/nextAuthProviders';
import { Josefin_Sans, Raleway } from 'next/font/google';
import localFont from 'next/font/local'
import './globals.css';
// import gilgan from './../font/Gilgan/Gilgan.otf';

const josefin = Josefin_Sans({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

const gilgan = localFont({
  src: './../font/Gilgan/Gilgan.otf',
  display: 'swap',
});

const tangoSans = localFont({
  src: './../font/TangoSans/TangoSans.ttf',
  display: 'swap',
});

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
