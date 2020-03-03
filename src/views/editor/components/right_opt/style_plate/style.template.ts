/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-02 14:08:43
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-03 16:16:25
 */
import { layoutStyle, Position, Background, Border, Font } from './style';
const layoutStyle: layoutStyle = {
  display: 'inline',
  margin: [0, 0, 20, 0],
  padding: [0, 10, 0, 0],
  width: 0,
  height: 0,
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

const Border: Border = {
  borderRadius: [0, 0, 0, 0],
  borderLeft: '',
  borderRight: '',
  borderTop: '',
  borderBottom: '',
  border: '',
};

const Font: Font = {
  fontType: 'normal',
  fontSize: 16,
  textAlign: 'left',
  verticalAlign: 'top',
  opacity: 100,
  color: '#000000',
  lineHeight: 16,
};

const Background: Background = {
  background: '#ffffff',
  backgroundRepeat: 'no-repeat',
};

export default {
  layoutStyle,
  positions,
  Background,
  Border,
  Font,
};
