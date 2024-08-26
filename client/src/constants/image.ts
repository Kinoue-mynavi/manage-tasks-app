type ImageExtension = 'png' | 'jpg';

type ImagePath = `/images/${string}.${ImageExtension}`;

export const IMAGES = {
  noImage: '/images/noImage.jpg',
} as const satisfies Record<string, ImagePath>;

export type Images = keyof typeof IMAGES;
