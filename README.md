# squircle-path

Generate squircle paths

## Installation

```sh
bun install @taep96/squircle-path
```

## Usage

<!-- prettier-ignore-start -->

```tsx
import { squirclePath } from "@taep96/squircle-path";

const squircle = squirclePath({ width: 256, height: 256, squarness: 0.5 });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

<img
  style={{ "clip-path": `path("${squircle}")` }}
  src="./image.png"
  alt="squircle"
  width="256"
  height="256"
/>
```

<!-- prettier-ignore-end -->

## Options

| Name      | Type    | Default | Description                                                                        |
| --------- | ------- | ------- | ---------------------------------------------------------------------------------- |
| width     | number  |         | Width of the squircle                                                              |
| height    | number  |         | Height of the squircle                                                             |
| squarness | number? | 0.3     | Squarness of the squircle. 0 is a circle, 1 is a square, 0.5 is a perfect squircle |
