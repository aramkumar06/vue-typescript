/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-02-17 11:16:47
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-02 15:40:42
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
  margin: number[];
  padding: number[];
  width?: string;
  height?: string;
  flexDirection?: flexDirection;
  justifyContent?: justifyContent;
  alignItems?: alignItems;
  flexWrap?: flexWarp;
}

type backgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
// repeat 重复
// repeat-x 水平方向重复
// repeat-y 垂直方向重复
// no- repeat 不重复
export interface Background {
  background?: string;
  backgroundRepeat?: backgroundRepeat;
}

export type positions = 'absolute' | 'fixed' | 'relative' | 'static';
export interface Position {
  position?: positions;
  zIndex?: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  float?: 'left' | 'right' | 'none';
}

// hidden	与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。
// dotted	定义点状边框。在大多数浏览器中呈现为实线。
// dashed	定义虚线。在大多数浏览器中呈现为实线。
// solid	定义实线。
// double	定义双线。双线的宽度等于 border-width 的值。
export type borderStyle = 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double';

export interface Border {
  borderRadius: number[];
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  border?: string;
}

export interface Font {
  fontType?: 'normal' | 'oblique' | 'blod';
  fontSize?: number;
  opacity?: number;
  lineHeight?: number;
  color?: string;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  verticalAlign?: 'top' | 'middle' | 'bottom' | 'baseline';
}

export interface style {
  layoutStyle: layoutStyle;
  Background: Background;
  font: Font;
  border: Border;
  position: Position;
}

// ant tip position type
export type tipPosition =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';
