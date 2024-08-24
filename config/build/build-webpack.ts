import webpack from 'webpack';
import { BuildOptions } from './types/types';
import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = options.mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].js'
        },
        module: {
            rules: buildLoaders(options)
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        devtool: isDev && 'source-map',
        devServer: buildDevServer(options)
    };
}
