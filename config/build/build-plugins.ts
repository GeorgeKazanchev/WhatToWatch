import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { BuildOptions } from './types/types';

export function buildPlugins(_: BuildOptions): Configuration['plugins'] {
    return [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        })
    ]
}
