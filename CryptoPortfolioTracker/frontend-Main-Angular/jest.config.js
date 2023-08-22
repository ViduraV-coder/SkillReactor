/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}"
  ],
  setupFilesAfterEnv: ["./setupJest.ts"],
  coveragePathIgnorePatterns: [
    "node_modules/",
    "vendor",
    "skillreactor/",
    ".build",
    "coverage/",
    "jest.config.js",
    "polyfills.ts",
    "src/environments/"
  ]
};