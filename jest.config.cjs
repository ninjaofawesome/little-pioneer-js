/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['./node_modules/'],
  bail: 1,
  verbose: true,
  transform: {
    "\\.ts": "rollup-jest"
  },
  snapshotResolver: "./jest/snapshotResolver.js"
};