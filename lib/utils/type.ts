export interface CallbackProps {
  error: Event | null;
  coords?: [number, number, string][];
  height?: number;
  pixelSize?: number;
}

export interface ImageProcessingProps {
  maxWidth: number;
  src: string;
}

export interface ImageProcessingResult {
  coords: [number, number, string][];
  height: number;
  pixelSize: number;
}

export interface GetRandomCoordinateProps {
  maxWidth: number;
  maxHeight: number;
}
