/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 11:08:51
 * @LastEditors  : wpp
 * @LastEditTime : 2020-02-13 14:16:18
 */
exports.rules = {
  "prettier/prettier": ["error", {
    "endOfLine":"crlf"
  }],
  "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0, // 打包时禁止debugger
  "no-console": process.env.NODE_ENV === "production" ? 2 : 0, // 打包时禁止console
  "no-alert": process.env.NODE_ENV === "production" ? 2 : 0, // 打包时禁止console
  "no-unused-vars": 0,
  "no-var": 1,
  "class-methods-use-this": 0,
  "import/no-unresolved": 0,
  "import/extensions": 0,
  "no-restricted-syntax": 0,
  "guard-for-in": 0,
  "no-param-reassign": 0
};
