import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config } : {config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(
      __dirname,
      '..',
      '..',
      'src',
    ),
    locales: '',
    buildLocales: '',
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');
  config!.resolve!.alias = { '@': paths.src };

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config!.module.rules = config!.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      };
    }

    return rule;
  });

  config!.module!.rules.push(buildCssLoaders(true));

  config!.module!.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });

  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
  }));

  config!.module!.rules.push({
    test: /\.(ts|tsx)$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  });

  return config;
};
