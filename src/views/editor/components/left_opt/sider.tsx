import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { EDITMODEL } from '@/store/types';

import componentList from './components_list';
import componenTree from './component_tree';
import globalArgs from './arguments';
import canvasSetting from './canvas_setting';

const editOpt = namespace('editOpt');

interface StateData {
  monacoInstance: any; // 代码编辑器实例
  radioDefVal: string; // 设置默认选中的按钮
  redioVal: string; // 双向绑定的按钮选中组
  topB: any; // 上半部分的按钮
  bottomB: any; // 下半部分的按钮
  siderEditWidth: string; // 设置侧边栏宽度
  siderWidthType: string; // 侧边栏展示状态
}
@Component({
  components: { componentList, componenTree, globalArgs, canvasSetting },
})
export default class EditSider extends Vue {
  private State: StateData = {
    monacoInstance: null,
    radioDefVal: 'null',
    siderWidthType: '',
    redioVal: 'componentList',
    siderEditWidth: '280px',
    bottomB: {
      globalArgs: {
        value: 'globalArgs',
        tipName: '全局参数设置',
        icon: 'tool',
      },
      canvasSetting: {
        value: 'canvasSetting',
        tipName: 'canvas 画布设置',
        icon: 'deployment-unit',
      },
      f: {
        value: 'f',
        tipName: '应用设置',
        icon: 'deployment-unit',
      },
    },
    topB: {
      componenTree: {
        value: 'componenTree',
        tipName: '组件树',
        icon: 'deployment-unit',
      },
      componentList: {
        value: 'componentList',
        tipName: '组件',
        icon: 'calculator',
      },
    },
  };

  // 马良模式 编辑 还是预览
  @editOpt.State((state) => state.EDITMODEL) private EDITMODEL?: EDITMODEL;

  // 检查是否是预览模式 为预览与编辑模式设置不同场景
  @Watch('EDITMODEL')
  private changeGETEDITMODEL() {
    if (this.EDITMODEL === 'preview') {
      this.MUT_COLLAPSED(false);
      setTimeout(() => {
        this.setSiderEditWidth(this.EDITMODEL);
        this.MUT_COLLAPSED(true);
      }, 400);
    } else {
      this.MUT_COLLAPSED(false);
      this.setSiderEditWidth(this.State.siderWidthType);
    }
  }

  @editOpt.State((state) => state.collapsed) private SCollapsed?: boolean;

  get collapsed() {
    return this.SCollapsed;
  }

  @editOpt.Mutation private MUT_COLLAPSED: any;

  // 设置是否弹出 侧边工具
  private toggleCollapsed() {
    this.MUT_COLLAPSED(!this.collapsed);
  }

  // 设置button 选种样式
  private changeButtonGroup(type: string, e: any) {
    this.State.redioVal = e.target.value;
    this.State.siderWidthType = type;
    if (!this.collapsed) {
      this.MUT_COLLAPSED(true);
    }
    this.setSiderEditWidth(type);
  }

  // 设置弹出兰宽度
  private setSiderEditWidth(type: string | any) {
    let width = '280px';
    switch (type) {
      case 'bottomB':
        width = '500px';
        break;
      case 'preview':
        width = '0px';
        break;
      default:
        width = '280px';
    }
    this.State.siderEditWidth = width;
  }

  // 渲染 top - bottom btns
  private renderBtns(btns: object): JSX.Element[] {
    const element = [];
    for (const i in btns) {
      const ele = (
        <a-radio-button value={i}>
          <a-tooltip placement='left'>
            <template slot='title'>
              <span>{btns[i].tipName}</span>
            </template>
            <div class='item_btn'>
              <a-icon type={btns[i].icon} />
            </div>
          </a-tooltip>
        </a-radio-button>
      );
      element.push(ele);
    }
    return element;
  }

  private onChange(value: string) {
    console.log(value);
  }

  // 渲染工具自建
  private get renderOptComponent(): JSX.Element {
    let com: JSX.Element = <componentList />;
    console.log(this.State.redioVal);
    switch (this.State.redioVal) {
      case 'componentList':
        com = <componentList />;
        break;
      case 'componenTree':
        com = <componenTree />;
        break;
      case 'globalArgs':
        com = <globalArgs />;
        break;
      case 'canvasSetting':
        com = <canvasSetting />;
        break;
      default:
        com = <div>{this.State.redioVal}</div>;
    }
    return com;
  }

  private render() {
    const {
      collapsed,
      toggleCollapsed,
      State,
      changeButtonGroup,
      renderBtns,
      renderOptComponent,
    } = this;
    return (
      <div
        id='edit_sider'
        style={collapsed ? `width:${State.siderEditWidth};` : ''}
        class={collapsed ? 'sider-fold' : 'sider-unfold'}
      >
        <div class='sider-btns'>
          <div class='top'>
            <a-button type='primary' onClick={toggleCollapsed}>
              <a-icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
            </a-button>
            <a-radio-group
              onChange={changeButtonGroup.bind(Event, 'topB')}
              defaultValue={State.radioDefVal}
              value={State.redioVal}
              buttonStyle='solid'
            >
              {renderBtns(State.topB)}
            </a-radio-group>
          </div>
          <div class='bottom'>
            <a-radio-group
              onChange={changeButtonGroup.bind(Event, 'bottomB')}
              defaultValue={State.radioDefVal}
              value={State.redioVal}
              buttonStyle='solid'
            >
              {renderBtns(State.bottomB)}
            </a-radio-group>
          </div>
        </div>
        <div class='sider_edit'>{renderOptComponent}</div>
      </div>
    );
  }
}
