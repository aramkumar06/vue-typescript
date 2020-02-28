import { Vue, Component } from 'vue-property-decorator';

import LayoutComp from './layout.comp';
import BackgroundComp from './background.comp';
import PositionComp from './position.comp';
import BorderComp from './border.comp';
import TextComp from './text.comp';

@Component({
  components: {
    LayoutComp,
    BackgroundComp,
    PositionComp,
    BorderComp,
    TextComp,
  },
})
export default class StylePlate extends Vue {
  private activeKey: string = '5';

  render(): JSX.Element {
    return (
      <div id='style_plate'>
        <div class='select_comp'>当前选中: 组件名称</div>
        <a-collapse v-model={this.activeKey} bordered={false}>
          <a-collapse-panel header='布局' key='1'>
            <LayoutComp />
          </a-collapse-panel>
          <a-collapse-panel header='背景' key='2'>
            <BackgroundComp />
          </a-collapse-panel>
          <a-collapse-panel header='定位' key='3'>
            <PositionComp />
          </a-collapse-panel>
          <a-collapse-panel header='边框' key='4'>
            <BorderComp />
          </a-collapse-panel>
          <a-collapse-panel header='文字' key='5'>
            <TextComp />
          </a-collapse-panel>
        </a-collapse>
      </div>
    );
  }
}
