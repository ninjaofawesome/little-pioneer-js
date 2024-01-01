import serve from 'rollup-plugin-serve';
import url from '@rollup/plugin-url';
import json from "@rollup/plugin-json";
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

export default [
  {
    input: `./src/index.ts`,
    watch: {
        include: './src/**',
        clearScreen: false
    },
    output: [
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
        serve({
            contentBase: ['dist', 'src'],
        }),
        typescript({
            tsconfig: './tsconfig.json'
        }),
        json(),
        sourcemaps({
            sourcemap: true,
            file: 'dist/bundle.js',
        }),
        nodeResolve(),
        url() 
    ],
  },
  {
    input: './src/index.html',
    output: { dir: './dist' },
    plugins: [html()],
  }
]

