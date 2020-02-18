/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-17 11:16:47
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-02-17 11:16:47
 */
type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
// row（默认值）：主轴为水平方向，起点在左端。
// row-reverse：主轴为水平方向，起点在右端。
// column：主轴为垂直方向，起点在上沿。
// column-reverse：主轴为垂直方向，起点在下沿。

type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
// flex-start（默认值）：左对齐
// flex-end：右对齐
// center： 居中
// space-between：两端对齐，项目之间的间隔都相等。
// space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

type alignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
// flex-start：交叉轴的起点对齐。
// flex-end：交叉轴的终点对齐。
// center：交叉轴的中点对齐。
// baseline: 项目的第一行文字的基线对齐。
// stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

type flexWarp = 'nowrap' | 'wrap' | 'wrap-reverse';
// nowrap	默认值。规定灵活的项目不拆行或不拆列。
// wrap	规定灵活的项目在必要的时候拆行或拆列。
// wrap-reverse	规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。

export interface layoutStyle {
  display?: string;
  margin: (string | number)[];
  padding: (string | number)[];
  width?: string;
  height?: string;
  flexDirection?: flexDirection;
  justifyContent?: justifyContent;
  alignItems?: alignItems;
  flexWarp?: flexWarp;
}

export interface Background {
  background: string;
}

export interface style {
  layoutStyle: layoutStyle;
  Background: Background;
}
