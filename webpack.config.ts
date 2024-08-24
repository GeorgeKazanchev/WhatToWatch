import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpack } from './config/build/build-webpack';
import { BuildMode } from './config/build/types/types';

interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = buildWebpack({
        mode: env.mode,
        port: env.port ?? 5000,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'public')
        }
    });
    return config;
}
