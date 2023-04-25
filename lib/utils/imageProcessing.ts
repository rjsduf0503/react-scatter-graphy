import { ImageProcessingProps, ImageProcessingResult } from './type';

const MAX_PIXELS = 2000;

export async function imageProcessing({
  maxWidth,
  src,
}: ImageProcessingProps): Promise<ImageProcessingResult> {
  if (maxWidth <= 0) {
    throw new Error('maxWidth must be greater than zero');
  }

  const image = await createImageBitmap(await fetch(src).then((res) => res.blob()));

  return new Promise((resolve, reject) => {
    requestAnimationFrame(() => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) return reject({ error: 'Canvas context not available.' });

      const width = maxWidth,
        height = (image.height * maxWidth) / image.width;

      const isHorizontal = width >= height;
      const divider = isHorizontal ? width : height;

      const s = (isHorizontal ? image.width : image.height) / divider / 10;
      let scale = (Math.sqrt(width * height) / divider) * s;

      (canvas.width = width), (canvas.height = height);
      context.scale(scale, scale);
      context.imageSmoothingEnabled = false;
      context.drawImage(image, 0, 0, width, height);

      let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      let pixels = new Uint8Array(imageData.data);
      let numPixelsFilled = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] !== 0) {
          numPixelsFilled++;
        }
      }

      if (numPixelsFilled > MAX_PIXELS) {
        scale = (scale * MAX_PIXELS) / numPixelsFilled;

        (canvas.width = width), (canvas.height = height);
        context.scale(scale, scale);
        context.drawImage(image, 0, 0, width, height);

        imageData = context.getImageData(0, 0, width, height);
        pixels = new Uint8Array(imageData.data);
      }

      let minX = width,
        maxX = 0,
        minY = height,
        maxY = 0;

      const imbalancedCoords: [number, number, string][] = [];

      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] !== 0) {
          const x = (i / 4) % width;
          const y = Math.floor(i / 4 / width);

          minX = Math.min(x, minX);
          maxX = Math.max(x, maxX);
          minY = Math.min(y, minY);
          maxY = Math.max(y, maxY);

          const r = pixels[i],
            g = pixels[i + 1],
            b = pixels[i + 2],
            a = pixels[i + 3];
          const color = `rgba(${r}, ${g}, ${b}, ${a})`;

          imbalancedCoords.push([x, y, color]);
        }
      }

      const w = maxX - minX,
        h = maxY - minY;

      const coords: [number, number, string][] = imbalancedCoords.map((v) => [
        ((v[0] - minX) * width) / w,
        ((v[1] - minY) * height) / h,
        v[2],
      ]);

      resolve({
        coords,
        height,
        pixelSize: isHorizontal ? width / w : height / h,
      });
    });
  });
}
