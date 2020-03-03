/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-02 10:22:55
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-02 11:01:53
 */
const a = {
  margin: '0px 0px 0px 0px',
  backgroundColor: 'red',
};

// json to string
function JSON_STYLE_TO_STRING(a) {
  const reg = /[0-9a-z]/gi;
  const ax = /[A-Z]/g;
  const newData = {};
  for (const key in a) {
    let mkey = key;
    if (key.match(ax)) {
      const any = key.match(reg);
      any.map((item, key) => {
        if (item.match(ax)) {
          any[key] = `-${item.toLowerCase()}`;
        }
      });
      mkey = any.join('');
    }

    newData[mkey] = a[key];
  }
  return newData;
}
