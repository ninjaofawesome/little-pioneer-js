/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['./node_modules/'],
  bail: 1,
  verbose: true,
  // transform: {
  //   "\\.ts": ["rollup-jest", {"configFile": "./rollup.config.js"}]
  // },
  snapshotResolver: "./jest/snapshotResolver.js"
};