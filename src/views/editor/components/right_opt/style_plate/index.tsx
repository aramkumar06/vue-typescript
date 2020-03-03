import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import LayoutComp from './layout.comp';
import BackgroundComp from './background.comp';
import PositionComp from './position.comp';
import BorderComp from './border.comp';
import TextComp from './text.comp';
// import styleTemplate from './style.template';
const pageData = namespace('pageData');

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
  @Watch('styleForm', { deep: true })
  private getStyle() {
    if (this.activeData.style) {
      this.activeData.style = this.changeKeyVal;
    }
  }

  private get changeKeyVal() {
    const data = {};
    for (const i in this.styleForm) {
      for (const n in this.styleForm[i]) {
        data[n] = this.styleForm[i][n];
      }
    }
    return data;
  }

  @pageData.State((state) => state.activeKey)
  private active!: string;

  @pageData.State((state) => state.activeData)
  private activeData!: any;

  private activeKey: string = '1';

  @Watch('activeData')
  private changeActiveData() {
    // 反向设置样式
    if (Object.keys(this.activeData.style).length <= 0) {
      // 空样式组
      this.getStyle();
    } else {
      // 设置子集样式
      // 如果style属性样式存在就反向设置
      for (const i in this.activeData.style) {
        console.log(i);
      }
    }
  }

  private styleForm: any = {
    layoutStyle: {},
    position: {},
    border: {},
    font: {},
    Background: {},
  };

  render(): JSX.Element {
    const { styleForm } = this;
    return (
      <div id='style_plate'>
        <div class='select_comp'>当前选中: {this.active}</div>
        <a-collapse activeKey={['1', '2', '3', '4', '5']} bordered={false}>
          <a-collapse-panel header='布局' key='1'>
            <LayoutComp v-model={styleForm.layoutStyle} />
          </a-collapse-panel>
          <a-collapse-panel header='背景' key='2'>
            <BackgroundComp v-model={styleForm.Background} />
          </a-collapse-panel>
          <a-collapse-panel header='定位' key='3'>
            <PositionComp v-model={styleForm.position} />
          </a-collapse-panel>
          <a-collapse-panel header='边框' key='4'>
            <BorderComp v-model={styleForm.border} />
          </a-collapse-panel>
          <a-collapse-panel header='文字' key='5'>
            <TextComp v-model={styleForm.font} />
          </a-collapse-panel>
        </a-collapse>
      </div>
    );
  }
}
