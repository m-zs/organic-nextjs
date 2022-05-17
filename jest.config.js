import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/cypress"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svg.jsx",
  },
};

export default createJestConfig(customJestConfig);
