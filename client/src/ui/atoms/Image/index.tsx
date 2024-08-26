import NextImage, { ImageProps } from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import { IMAGES, Images } from '@/constants/image';

import { container, image, type ImageHeight } from './style.css';

type BaseProps = {
  imageHeight?: ImageHeight;
} & Omit<ImageProps, 'src' | 'className' | 'fill' | 'sizes' | 'onError'>;

type ExternalImageProps = {
  imageUrl?: string;
  localImageName?: never;
} & BaseProps;

type LocalImageProps = {
  localImageName?: Images;
  imageUrl?: never;
} & BaseProps;

type Props = ExternalImageProps | LocalImageProps;

export const Image: React.FC<Props> = React.memo(
  ({ imageHeight = 'full', localImageName, imageUrl, ...props }) => {
    const [imageSource, setImageSource] = useState<string>(
      imageUrl || IMAGES.noImage,
    );

    const handleError = useCallback(() => {
      setImageSource(IMAGES.noImage);
    }, []);

    useEffect(() => {
      if (imageUrl) {
        setImageSource(imageUrl);
      }
    }, [imageUrl]);

    return (
      <div className={container[imageHeight]}>
        <NextImage
          {...props}
          className={image}
          fill
          sizes="100%"
          src={localImageName ? IMAGES[localImageName] : imageSource}
          onError={handleError}
        />
      </div>
    );
  },
);
