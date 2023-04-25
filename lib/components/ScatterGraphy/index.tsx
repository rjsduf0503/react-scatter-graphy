import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { getRandomCoordinate } from '../../utils/coordinate';
import { debounce } from '../../utils/debounce';
import { imageProcessing } from '../../utils/imageProcessing';

import { Dot, Wrapper } from './style';

import { CallbackProps } from '../../utils/type';
import { ScatterGraphyProps } from './type';

function ScatterGraphy({
  src,
  duration = 500,
  size = 1,
  color = 'black',
  resizeDelay = 500,
}: ScatterGraphyProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [coords, setCoords] = useState<number[][]>([]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [pixelSize, setPixelSize] = useState<number>(1);

  const imageProcessingByWidth = useCallback(() => {
    if (!ref.current || !ref.current.parentElement) return;

    const maxWidth = ref.current.parentElement.clientWidth;
    setWidth(maxWidth);

    imageProcessing({
      maxWidth,
      src,
      callback: ({ error, coords, height, pixelSize }: CallbackProps) => {
        if (error || !coords || !height || !pixelSize) {
          console.error(error);
          return;
        }

        setCoords(coords);
        setHeight(height);
        setPixelSize(size * pixelSize);
      },
    });
  }, [ref, src, setCoords, setHeight, setPixelSize, setWidth, size, imageProcessing]);

  const debouncedImageProcessing = useMemo(
    () => debounce(imageProcessingByWidth, resizeDelay),
    [imageProcessingByWidth, resizeDelay],
  );

  useLayoutEffect(() => {
    imageProcessingByWidth();
    window.addEventListener('resize', debouncedImageProcessing);

    return () => window.removeEventListener('resize', debouncedImageProcessing);
  }, [imageProcessingByWidth, debouncedImageProcessing]);

  return (
    <Wrapper
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: `${height}px`,
      }}
      ref={ref}
    >
      {coords.map((coord: number[], i: number) => (
        <Dot
          key={i}
          isHovered={isHovered}
          size={pixelSize}
          duration={duration}
          color={color}
          coord={coord}
          randomCoord={getRandomCoordinate({ maxWidth: width, maxHeight: height })}
        />
      ))}
    </Wrapper>
  );
}

export default ScatterGraphy;
