import './globals.css';

import { constructMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { geistMono, geistSans } from './fonts/fonts';

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', geistSans.variable, geistMono.variable)}>
        <div className="bg-background min-h-screen">
          <div className="container max-w-screen-lg mx-auto px-4 py-8">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </div>
      </body>
    </html>
  );
}
