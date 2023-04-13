import { ImageProcessingProps } from './type';

export function imageProcessing({ maxWidth, size, src, callback }: ImageProcessingProps) {
  const image = new Image();

  image.crossOrigin = 'Anonymous';
  image.style.imageRendering = 'crisp-edges';

  image.onload = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;

    const width = maxWidth,
      height = (image.height * maxWidth) / image.width;

    (canvas.width = width), (canvas.height = height);

    context.scale(0.5 / size, 0.5 / size);
    context.imageSmoothingEnabled = false;
    context.drawImage(image, 0, 0, width * 2, height * 2);

    const imageData = context.getImageData(0, 0, width, height);
    const pixels = new Uint8Array(imageData!.data);

    let minX = width,
      maxX = 0,
      minY = height,
      maxY = 0;

    const imbalancedCoords: number[][] = [];

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] !== 0) {
        const x = (i / 4) % width,
          y = Math.floor(i / 4 / width);

        (minX = Math.min(x, minX)),
          (maxX = Math.max(x, maxX)),
          (minY = Math.min(y, minY)),
          (maxY = Math.max(y, maxY));

        imbalancedCoords.push([x, y]);
      }
    }

    const w = maxX - minX,
      h = maxY - minY;

    const coords: number[][] = imbalancedCoords.map((v) => [
      ((v[0] - minX) * width) / w,
      ((v[1] - minY) * height) / h,
    ]);

    callback({ error: null, coords, height });
  };

  image.onerror = (error) => {
    callback({ error: error as Event });
  };

  image.src = src;
}
