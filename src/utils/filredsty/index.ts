/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-03 14:56:16
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-03 17:12:09
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
  const { state, li } = style;
  const who = li[state.borderPosition];
  if (state.borderPosition === 4) {
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
  if (state.borderType === 'radius') {
    data.borderRadius = `${state.form.borderRadius[0]}px`;
  } else {
    data.borderRadius = `${state.form.borderRadius[0]}px ${state.form.borderRadius[1]}px ${state.form.borderRadius[2]}px ${state.form.borderRadius[3]}px`;
  }
}

export default (style: any) => {
  const data = {};

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
      } else {
        data[n] = Number(style[i][n])
          ? `${Number(style[i][n])}px`
          : style[i][n];
      }
    }
  }
  return data;
};
