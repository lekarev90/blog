/* eslint-disable no-console */
import path from 'path';
import type webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  console.log(env.apiUrl);
  const apiUrl = isDev ? 'http://localhost:8000' : env.apiUrl;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });
};
