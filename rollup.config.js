import dts from 'rollup-plugin-dts';
import json from "@rollup/plugin-json";
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: `src/index.ts`,
    plugins: [
        json(),
        typescript({
             compilerOptions: {
                lib: ["es5", "es6", "dom"], 
                target: "es5"
            }
        })
    ],
    output: [
        {
            file: `dist/index-bundle.js`,
            format: 'cjs',
        },
        {
            file: 'index-bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ]
  },
  {
    input: `src/index.ts`,
    plugins: [dts()],
    output: [
        {
            file: `dist/index-bundle.d.ts`,
            format: 'es',
        },
       
    ],
  }
]

