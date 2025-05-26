import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'react-vertical-timeline-component/style.min.css';

import { metadataValues } from '@/lib/constants';

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
  title: metadataValues.title,
  description: metadataValues.description,
  keywords: [
    'Full-stack Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Web Development',
  ],
  authors: { name: metadataValues.creatorName },
  creator: metadataValues.creatorName,
  openGraph: {
    title: metadataValues.title,
    description: metadataValues.description,
    type: 'website',
    locale: 'en_US',
    url: metadataValues.siteUrl,
    images: [
      {
        url: `${metadataValues.siteUrl}${metadataValues.ogImageUrl}`,
        width: metadataValues.ogImageWidth,
        height: metadataValues.ogImageHeight,
        alt: metadataValues.ogImageAlt,
      },
    ],
    emails: metadataValues.email,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lumalisan69',
    title: metadataValues.title,
    description: metadataValues.description,
    images: [
      {
        url: `${metadataValues.siteUrl}${metadataValues.ogImageUrl}`,
        width: metadataValues.ogImageWidth,
        height: metadataValues.ogImageHeight,
        alt: metadataValues.ogImageAlt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={circularStd.className}>
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
