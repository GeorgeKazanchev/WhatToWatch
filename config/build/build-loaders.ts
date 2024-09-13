import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: '[name]__[local]--[hash:base64:8]',
                exportLocalsConvention: 'camelCase'
            }
        }
    };

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    autoprefixer({
                        overrideBrowserslist: [
                            'last 2 version'
                        ]
                    })
                ]
            }
        }
    };

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoader,
            postcssLoader,
            'sass-loader'
        ]
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    return [
        stylesLoader,
        tsLoader
    ]
}
