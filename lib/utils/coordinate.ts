import { GetRandomCoordinateProps } from './type';

export function getRandomCoordinate({ maxWidth, maxHeight }: GetRandomCoordinateProps) {
  return [Math.floor(Math.random() * maxWidth), Math.floor(Math.random() * maxHeight)];
}
