declare module '*.module.scss' {
    interface IClassNames {
        [styles: string]: string
    }
    const styles: IClassNames;
    export = styles;
}

declare module 'react-test-renderer';
