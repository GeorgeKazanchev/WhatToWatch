import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        historyApiFallback: true,
        port: options.port,
        compress: false,
        open: true,
    };
}
