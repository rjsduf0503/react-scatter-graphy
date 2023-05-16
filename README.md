# react-scatter-graphy

Image src based retro typography with scattering animation.

When you `hover` the mouse cursor over the `scattered pixels`, it is animated as the original image.

> You can also use react-scatter-graphy not only typography image but also normal image
>
> Currently, PNG formats are more effective than JPEG formats.

<p align="center">
  <img width='400' src="https://user-images.githubusercontent.com/34560965/234566023-9e365576-1c97-4513-9115-8f4d96134873.gif" alt="example-instagram" />
  <br />
  <br />
  <img width='600' src="https://user-images.githubusercontent.com/34560965/234566012-8ebca599-80ea-42a5-9e13-53ea92d25fe1.gif" alt="example-kakao" />
</p>

## Features

- Convert images to pixels
- Automated optimization for large number of pixels
- Automated pixel color
- Automated resize
- Supports JPEG, PNG images format

## Installing

Using npm:

```bash
$ npm install react-scatter-graphy
```

Using yarn:

```bash
$ yarn add react-scatter-graphy
```

## Example

```javascript
import { ScatterGraphy } from 'react-scatter-graphy';

function App() {
  return (
    <div style={{ width: '50%' }}>
      <ScatterGraphy
        src={yourImage}
        size={pixelSize}
        shape={pixelShape}
        duration={animationDuration}
        color={pixelColor}
        resizeDelay={delayWhenResize}
      />
    </div>
  );
}

export default App;
```

## Props

| Prop          | Type               |      Default      | Required | Description                                                                                   |
| :------------ | :----------------- | :---------------: | :------: | :-------------------------------------------------------------------------------------------- |
| `src`         | string             |                   |    ✓     | Image src.                                                                                    |
| `size`        | number             |         1         |          | Number to multiply automatically calculated pixel size. In most cases, 1 is the optimal size. |
| `shape`       | 'circle \| square' |      square       |          | Pixel shape.                                                                                  |
| `duration`    | number             |        500        |          | Pixel animation duration.                                                                     |
| `color`       | color              | Image pixel color |          | Image pixel color. The default value is set to the pixel color of the image.                  |
| `resizeDelay` | number             |        500        |          | Delay when screen resize event occurs.                                                        |

## Development

```shell
$ yarn
$ yarn storybook
```

## Maintainers

This project is maintained by Geonyeol Ryu.

- [Github](https://github.com/rjsduf0503)
- rjsduf0503@gmail.com

## License

MIT © react-scatter-graphy. See [LICENSE](./LICENSE) for details.
