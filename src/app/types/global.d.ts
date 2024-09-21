declare module '*.module.scss' {
    type ClassNames = Record<string, string>;
    const styles: ClassNames;
    export = styles;
}

declare module 'react-test-renderer';
