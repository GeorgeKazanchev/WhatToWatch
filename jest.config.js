module.exports = {
    rootDir: './src',
    transform: {
        "^.+\\.tsx?$": `ts-jest`,
        "^.+\\.js?$": `babel-jest`,
    },
    testRegex: `.test.(js?|jsx?|tsx?)$`,
    moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    }
};
