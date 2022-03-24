module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    '!src/**/stories.ts(x)',
    '!src/pages/index.ts(x)',
    '!src/pages/App.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/document.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src']
}
