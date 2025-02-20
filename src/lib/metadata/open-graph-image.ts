import config from '@/config';

export const openGraphImage = {
  images: [
    {
      url: '/og.jpeg',
      width: 1200,
      height: 630,
      alt: config.metadata.name ?? '',
    },
  ],
};
