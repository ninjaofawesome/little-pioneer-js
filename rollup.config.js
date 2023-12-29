import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import json from "@rollup/plugin-json";
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default [
  {
    input: `./src/index.ts`,
    output: [
        {
            file: `./src/bundle.js`,
            format: 'es',
            sourcemap: true
        },
        {
            file: `./dist/bundle.js`,
            format: 'es',
            sourcemap: true
        },
        {
			file: './dist/bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
    ],
    plugins: [
        typescript({tsconfig: './tsconfig.json'}),
        json(),
        sourcemaps(),
        nodeResolve()
    ],
  },
  {
    input: './src/index.html',
    output: { dir: './dist' },
    plugins: [html()],
  }
]

