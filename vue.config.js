/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-13 10:20:56
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-04 11:45:42
 */
// const monacoWebpack = require('monaco-editor-webpack-plugin');
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 9990,
  },
  chainWebpack: (config) => {
    config
      .plugin('monaco-editor-webpack-plugin')
      .use(require('monaco-editor-webpack-plugin'));
  },
};
