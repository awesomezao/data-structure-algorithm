module.exports = {
  roots: ['<rootDir>'],
  verbose: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  testMatch: [
    '<rootDir>/data-structure/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/sort-algorithm/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/data-structure/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/sort-algorithm/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ]
};
