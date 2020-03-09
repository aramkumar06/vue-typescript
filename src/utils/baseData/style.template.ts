/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-02 14:08:43
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-09 15:15:21
 */
import { layoutStyle, Position, Background, Font, Border } from '@/types/style';

const layoutstyle: layoutStyle = {
  display: 'block',
  margin: [0, 0, 0, 0],
  padding: [0, 0, 0, 0],
  width: 100,
  height: 100,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'nowrap',
};

const positions: Position = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 0,
  float: 'none',
  position: 'static',
};

const border: Border = {
  borderRadius: [0, 0, 0, 0],
  borderLeft: '',
  borderRight: '',
  borderTop: '',
  borderBottom: '',
  border: '',
  size: 0,
  color: '#000000',
  borderPosition: 4,
  borderType: 'radius',
  li: [
    {
      text: '',
    },
    {
      text: '上',
      size: 1,
      style: 'solid',
      color: '#000000',
    },
    {
      text: '',
    },
    {
      text: '左',
      position: 'left',
      size: 1,
      style: 'solid',
      color: '#000000',
    },
    {
      text: '全',
      size: 1,
      style: 'hidden',
      color: '#000000',
    },
    {
      text: '右',
      position: 'right',
      style: 'solid',
      size: 1,
      color: '#000000',
    },
    {
      text: '',
    },
    {
      text: '下',
      position: 'bottom',
      size: 1,
      style: 'solid',
      color: '#000000',
    },
    {
      text: '',
    },
  ],
};

const font: Font = {
  fontType: 'normal',
  fontSize: 16,
  textAlign: 'left',
  verticalAlign: 'top',
  opacity: 100,
  color: '#ffffff',
  lineHeight: 16,
  value: '',
};

const background: Background = {
  backgroundRepeat: 'no-repeat',
  background: '#000000',
};

export default {
  layoutStyle: layoutstyle,
  position: positions,
  Background: background,
  border,
  font,
};
