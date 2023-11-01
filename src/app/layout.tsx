import type { Metadata } from 'next';
import NextAuthProviders from '@/utils/nextAuthProviders';
import './globals.css';


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
      <body>
        <NextAuthProviders>{children}</NextAuthProviders>
      </body>
    </html>
  );
}
