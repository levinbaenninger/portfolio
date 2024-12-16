import { Metadata } from 'next';

export function constructMetadata({
  title = 'Levin Bänninger',
  description = 'I am a software engineer with a passion for building scalable and efficient web applications.',
  image = '/thumbnail.png', // TODO: Update this to a real image
  icons = '/avatar.svg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@levinbaenninger',
    },
    icons,
    metadataBase: new URL('https://levinbaenninger.dev'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
