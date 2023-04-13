import { useLayoutEffect, useRef, useState } from 'react';

import { getRandomCoordinate } from '../../utils/coordinate';
import { imageProcessing } from '../../utils/imageProcessing';

import { Dot, Wrapper } from './style';

import { ScatterGraphyProps } from './type';
import { CallbackProps } from '../../utils/type';

function ScatterGraphy({ src, duration = 500, size = 1, color = 'black' }: ScatterGraphyProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [coords, setCoords] = useState<number[][]>([]);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;

    const maxWidth = ref.current.parentElement.clientWidth;
    setWidth(maxWidth);

    imageProcessing({
      maxWidth,
      size,
      src,
      callback: ({ error, coords, height }: CallbackProps) => {
        if (error || !coords || !height) {
          console.error(error);
          return;
        }

        setCoords(coords);
        setHeight(height);
      },
    });
  }, [size]);

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
          size={size}
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
