/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 11:08:51
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-10 13:38:37
 */
exports.rules = {
  'prettier/prettier': 'error',
  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止debugger
  'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console
  'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁止console
  'no-unused-vars': 0,
  'no-var': 1,
  'class-methods-use-this': 0,
  'import/no-unresolved': 0,
  'import/extensions': 0,
  'no-restricted-syntax': 0,
  'guard-for-in': 0,
  'no-param-reassign': 0,
  'no-shadow': 0,
  'max-classes-per-file': 0, // 允许一个文件下存在两个类
};
