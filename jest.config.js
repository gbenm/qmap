/* eslint-disable */
const { pathsToModuleNameMapper } = require("ts-jest")
const { compilerOptions } = require("./tsconfig.json")

/** @type {import("@jest/types").Config} */
const config = {
  verbose: true,
  transform: {
    "^.+\\.(tsx?|js)$": "ts-jest",
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
  roots: ["src"],
}

module.exports = config
