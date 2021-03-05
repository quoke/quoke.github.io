import { terser } from "rollup-plugin-terser";
import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from '@rollup/plugin-babel';
import glob from "glob";

const scriptPattern = path.resolve(__dirname, "_scripts/**/!(_)*.js");

const inputs = glob.sync(scriptPattern).reduce((files, input) => {
  const parts = input.split("/");
  const fileKey = parts[parts.length - 1];
  return { [fileKey]: input, ...files };
}, {});

const outputs = Object.keys(inputs).reduce((files, file) => {
  const inputPath = inputs[file];
  const parts = inputPath.split("/");
  const pathIndex = parts.indexOf("_scripts") + 1;
  const outputPath = parts.slice(pathIndex).join("/");
  return { [file]: `assets/js/${outputPath}`, ...files };
}, {});

const bundles = Object.keys(inputs).map((key) => {
  return {
    input: inputs[key],
    output: {
      file: outputs[key],
      format: "umd",
      sourcemap: true,
      exports: "default",
      name: "quoke"
    },
    plugins: [
      commonjs(),
      nodeResolve(),
      babel({
        exclude: "node_modules/**",
        comments: false,
      }),
      terser(),
    ],
  };
});

export default bundles;
