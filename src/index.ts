// Thanks to https://github.com/nora2605 for the math
import { Path } from "@taep96/svg-path-utils";

interface squirclePathProps {
  width: number;
  height: number;
  squareness?: number;
}

export function squirclePath({ width, height, squareness = 0.3 }: squirclePathProps) {
  const s = 5 / 9 + (8 / 9) * squareness;

  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const toKth = (n: number) => Math.trunc(n * 1000) / 1000;

  const sLeft = toKth((1 - s) * halfWidth);
  const sTop = toKth((1 - s) * halfHeight);
  const sRight = toKth((1 + s) * halfWidth);
  const sBottom = toKth((1 + s) * halfHeight);

  return new Path()
    .M([0, halfHeight])
    .C([
      [0, sTop],
      [sLeft, 0],
      [halfWidth, 0],
    ])
    .S([
      [width, sTop],
      [width, halfHeight],
    ])
    .S([
      [sRight, height],
      [halfWidth, height],
    ])
    .S([
      [0, sBottom],
      [0, halfHeight],
    ])
    .toString();
}
