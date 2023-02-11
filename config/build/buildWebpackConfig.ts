import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

import {BuildOptions} from "./types/config";

import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev} = options;

    return (
        {
            mode,
            entry: paths.entry,
            output: {
                filename: "[name].[contenthash].js",
                path: paths.build,
                clean: true
            },
            plugins: buildPlugins(options),
            module: {
                rules: buildLoaders(options),
            },
            resolve: buildResolvers(options),
            devtool: isDev && 'inline-source-map',
            devServer: isDev && buildDevServer(options)
        }
    );
}
