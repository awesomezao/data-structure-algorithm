module.exports = {
  roots: ['<rootDir>'],
  verbose: false,
  collectCoverageFrom: [
    'data-structure/**/*.{js,ts}',
    'sort-algorithm/**/*.{js,ts}',
    '!src/**/*.d.ts'
  ],
  testMatch: [
    '<rootDir>/data-structure/**/__tests__/**/*.{js,ts}',
    '<rootDir>/sort-algorithm/**/__tests__/**/*.{js,ts}',
    '<rootDir>/data-structure/**/*.{spec,test}.{js,ts}',
    '<rootDir>/sort-algorithm/**/*.{spec,test}.{js,ts}'
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ]
};
