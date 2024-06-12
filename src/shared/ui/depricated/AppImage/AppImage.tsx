import {
  ImgHTMLAttributes, memo, ReactNode, useLayoutEffect, useState,
} from 'react';

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

/**
 * @deprecated
 */

export const AppImage = memo(({
  fallback, errorFallback, alt = 'image', src, ...props
}: IAppImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img src={src} alt={alt} {...props} />;
});
