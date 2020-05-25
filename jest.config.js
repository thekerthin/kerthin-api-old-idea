module.exports = {
  rootDir: 'src',
  testRegex: '.spec.ts$',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.ts'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 20,
    },
  },
};
