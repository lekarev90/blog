import { buildCssLoaders } from './loaders/buildCssLoaders';
import { type BuildOptions } from './types/config';

import type webpack from 'webpack';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              },
            },
          ],
        },
      },
    }],
    exclude: /node_modules/,
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader = buildCssLoaders(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
      },
    },
  };

  return [fileLoader, svgLoader, babelLoader, tsLoader, sassLoader];
};
