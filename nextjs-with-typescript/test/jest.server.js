// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestCommon = require('./jest-common');

module.exports = {
    ...jestCommon,
    displayName: 'server',
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s$',
};
