import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  external: ["@taep96/svg-path-utils"],
  plugins: [dts()],
});
