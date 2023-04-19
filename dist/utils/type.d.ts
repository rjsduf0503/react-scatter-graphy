export interface CallbackProps {
    error: Event | null;
    coords?: number[][];
    height?: number;
}
export interface ImageProcessingProps {
    maxWidth: number;
    size: number;
    src: string;
    callback: ({ error, coords, height }: CallbackProps) => void;
}
export interface GetRandomCoordinateProps {
    maxWidth: number;
    maxHeight: number;
}
