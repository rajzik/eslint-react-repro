module.exports = {
  "preset": "jest-preset-oriflame",
  "bail": false,
  "collectCoverageFrom": [
    "**/src/**/*.{ts,tsx,js,jsx}",
    "**/tests/**/*.{ts,tsx,js,jsx}"
  ],
  "collectCoverage": true,
  "snapshotSerializers": [
    "@emotion/jest/serializer"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 75,
      "functions": 75,
      "lines": 75,
      "statements": 75
    }
  },
  "moduleNameMapper": {
    "^~/(.*)": "<rootDir>/src/$1"
  },
  "setupFiles": [
    "<rootDir>/node_modules\\@oriflame\\config-jest\\setup\\console.js",
    "<rootDir>/node_modules\\@oriflame\\config-jest\\setup\\dom.js"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/node_modules\\@oriflame\\config-jest\\setup\\emotion.js",
    "@testing-library/jest-dom/extend-expect"
  ],
  "testEnvironment": "jsdom",
  "reporters": [
    "default",
    [
      "jest-junit",
      {
        "outputName": "TEST-RESULTS.xml"
      }
    ]
  ]
};