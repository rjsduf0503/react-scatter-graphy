export interface CallbackProps {
  error: Event | null;
  coords?: number[][];
  height?: number;
  pixelSize?: number;
}

export interface ImageProcessingProps {
  maxWidth: number;
  src: string;
  callback: ({ error, coords, height }: CallbackProps) => void;
}

export interface GetRandomCoordinateProps {
  maxWidth: number;
  maxHeight: number;
}
