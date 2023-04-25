import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getRandomCoordinate } from '../../utils/coordinate';
import { debounce } from '../../utils/debounce';
import { imageProcessing } from '../../utils/imageProcessing';

import { Dot, Wrapper } from './style';

import { ImageProcessingResult } from '../../utils/type';
import { ScatterGraphyProps } from './type';

function ScatterGraphy({
  src,
  duration = 500,
  size = 1,
  color,
  resizeDelay = 500,
}: ScatterGraphyProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [coords, setCoords] = useState<[number, number, string][]>([]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [pixelSize, setPixelSize] = useState<number>(1);

  const imageProcessingByWidth = useCallback(() => {
    if (!ref.current || !ref.current.parentElement) return;

    const maxWidth = ref.current.parentElement.clientWidth;
    setWidth(maxWidth);

    (async () => {
      const { coords, height, pixelSize }: ImageProcessingResult = await imageProcessing({
        maxWidth,
        src,
      });

      setCoords(coords);
      setHeight(height);
      setPixelSize(size * pixelSize);
    })();
  }, [ref, src, setCoords, setHeight, setPixelSize, setWidth, size, imageProcessing]);

  const debouncedImageProcessing = useMemo(
    () => debounce(imageProcessingByWidth, resizeDelay),
    [imageProcessingByWidth, resizeDelay],
  );

  useEffect(() => {
    imageProcessingByWidth();
    window.addEventListener('resize', debouncedImageProcessing);

    return () => window.removeEventListener('resize', debouncedImageProcessing);
  }, [imageProcessingByWidth, debouncedImageProcessing]);

  const memoizedGetRandomCoordinate = useCallback(getRandomCoordinate, []);

  return (
    <Wrapper
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: `${height}px`,
      }}
      ref={ref}
    >
      {coords.map((coord: [number, number, string], i: number) => (
        <Dot
          key={i}
          isHovered={isHovered}
          size={pixelSize}
          duration={duration}
          color={color || coord[2]}
          coord={[coord[0], coord[1]]}
          randomCoord={memoizedGetRandomCoordinate({ maxWidth: width, maxHeight: height })}
        />
      ))}
    </Wrapper>
  );
}

export default ScatterGraphy;
