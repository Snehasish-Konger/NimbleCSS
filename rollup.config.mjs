import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser"; // Corrected import

export default {
  input: "src/index.js",
  output: {
    file: "react/index.js",
    format: "cjs",
    exports: "auto",
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    terser(), // Default export
  ],
};
