import json from "@rollup/plugin-json";
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';


export default [
  {
    input: `./src/index.ts`,
    output: [
        {
            file: `./dist/bundle.js`,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        typescript({tsconfig: './tsconfig.json'}),
        json(),
        sourcemaps()
    ],
    
  }
]

