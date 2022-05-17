import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.(tsx?|js)$": "ts-jest",
  },
  roots: ["src"]
}

export default config
