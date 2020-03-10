/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-03 14:56:16
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-09 15:34:34
 */
const ignorStyle = [];

export const cloneStyle = (style: any) => {
  const css = {};
  for (const i in style) {
    for (const n in style[i]) {
      css[n] = style[i][n];
    }
  }
  return css;
};

function marginPadding(val: any) {
  const mp: string[] = [];
  val.forEach((item: any, key: number) => {
    mp.push(`${item || 0}px`);
  });
  return mp.join(' ');
}

function Border(i: string, style: any, data: any) {
  const { li } = style;
  const who = li[style.borderPosition];
  if (style.borderPosition === 4) {
    // 统一边框
    data.border = `${who.size}px ${who.style} ${who.color}`;
  } else {
    const top = li[1];
    const left = li[3];
    const right = li[5];
    const bottom = li[7];
    data.borderTop = `${top.size}px ${top.style} ${top.color}`;
    data.borderLeft = `${left.size}px ${left.style} ${left.color}`;
    data.borderRight = `${right.size}px ${right.style} ${right.color}`;
    data.borderBottom = `${bottom.size}px ${bottom.style} ${bottom.color}`;
  }
  // 处理border- radius
  if (style.borderType === 'radius') {
    data.borderRadius = `${style.borderRadius[0]}px`;
  } else {
    data.borderRadius = `${style.borderRadius[0]}px ${style.borderRadius[1]}px ${style.borderRadius[2]}px ${style.borderRadius[3]}px`;
  }
}

export default (style: any) => {
  const data = {};
  const re = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  /* eslint no-continue: 0 */
  for (const i in style) {
    if (i === 'border') {
      Border(i, style[i], data);
      continue;
    }

    for (const n in style[i]) {
      if (n === 'margin' || n === 'padding') {
        // 处理 margin and padding
        data[n] = marginPadding(style[i][n]);
      } else if (n === 'opacity') {
        data[n] = style[i][n] / 100;
      } else if (n === 'background' && !re.test(style[i][n])) {
        data['background-image'] = `url(${style[i][n]});`;
        console.log(data['background-image']);
      } else {
        data[n] = Number(style[i][n])
          ? `${Number(style[i][n])}px`
          : style[i][n];
      }
    }
  }
  return data;
};
