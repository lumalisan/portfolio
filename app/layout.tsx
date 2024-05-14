import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import './globals.css';
import 'react-vertical-timeline-component/style.min.css';

const circularStd = localFont({
  src: [
    {
      path: './fonts/CircularStd-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lisandro Rocha',
  description: 'Full-stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={circularStd.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
