import * as path from 'path';
import json from "@rollup/plugin-json";
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';
// import url from '@rollup/plugin-url';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default [
  {
    input: `./src/index.ts`,
    output: [
        {
            file: `./src/bundle.js`,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        typescript({tsconfig: './tsconfig.json'}),
        json(),
        sourcemaps(),
        nodeResolve()
    ],
    
  }
]

