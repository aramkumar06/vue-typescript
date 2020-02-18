import { Vue, Component } from 'vue-property-decorator';

import LayoutComp from './layout.comp';
import BackgroundComp from './background.comp';

@Component({
  components: { LayoutComp, BackgroundComp },
})
export default class StylePlate extends Vue {
  private activeKey: string = '2';

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
            <p>text</p>
          </a-collapse-panel>
          <a-collapse-panel header='边框' key='4'>
            <p>text</p>
          </a-collapse-panel>
          <a-collapse-panel header='文字' key='5'>
            <p>text</p>
          </a-collapse-panel>
        </a-collapse>
      </div>
    );
  }
}
