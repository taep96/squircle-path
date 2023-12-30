# squircle-path

[![license][license badge]][license link]
[![npm package][npm badge]][npm link]
[![github stars][stars badge]][stars link]
[![follow taep96 on x][x badge]][x link]

[license badge]: https://img.shields.io/github/license/taep96/squircle-path?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zY2FsZSI%2BPHBhdGggZD0ibTE2IDE2IDMtOCAzIDhjLS44Ny42NS0xLjkyIDEtMyAxcy0yLjEzLS4zNS0zLTFaIi8%2BPHBhdGggZD0ibTIgMTYgMy04IDMgOGMtLjg3LjY1LTEuOTIgMS0zIDFzLTIuMTMtLjM1LTMtMVoiLz48cGF0aCBkPSJNNyAyMWgxMCIvPjxwYXRoIGQ9Ik0xMiAzdjE4Ii8%2BPHBhdGggZD0iTTMgN2gyYzIgMCA1LTEgNy0yIDIgMSA1IDIgNyAyaDIiLz48L3N2Zz4%3D&logoColor=white&labelColor=black&color=white
[npm badge]: https://img.shields.io/npm/v/%40taep96%2Fsquircle-path?style=for-the-badge&logo=npm&labelColor=black&color=white
[stars badge]: https://img.shields.io/github/stars/taep96/squircle-path?style=for-the-badge&logo=github&labelColor=black&color=white
[x badge]: https://img.shields.io/twitter/follow/taep96?style=for-the-badge&logo=x&labelColor=black&color=%230000
[license link]: https://github.com/taep96/squircle-path/blob/main/LICENSE
[npm link]: https://www.npmjs.com/package/@taep96/squircle-path
[stars link]: https://github.com/taep96/squircle-path/stargazers
[x link]: https://twitter.com/intent/follow?screen_name=taep96

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
