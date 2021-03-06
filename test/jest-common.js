// common project configuration used by the other configs

const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, '..'),
    verbose: true,
    moduleNameMapper: {
        '^utilities/(.*)': '<rootDir>/utilities/$1',
        '^components/(.*)': '<rootDir>/components/$1',
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/.next/',
        'enzyme.js',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'node',
    ],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/dist/'],
};
