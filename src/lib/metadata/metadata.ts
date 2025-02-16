import config from '@/config';
import type { Metadata } from 'next';
import { openGraphImage } from './open-graph-image';

const metadata: Metadata = {
  metadataBase: new URL(config.metadata.url),
  title: config.metadata.name,
  description: config.metadata.description,
  icons: {
    icon: config.metadata.icon,
  },
  openGraph: {
    siteName: config.metadata.name,
    title: config.metadata.name,
    type: 'website',
    url: config.metadata.url,
    ...openGraphImage,
  },
};

export default metadata;
