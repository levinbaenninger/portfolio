import type { Metadata } from 'next';
import { Mona_Sans } from 'next/font/google';
import './globals.css';

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Levin Bänninger',
  description:
    'Full-stack developer and student building scalable web solutions that bridge the gap between users and technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
