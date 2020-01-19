import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import DeawerGroup from './drawer_group';
import { EDITMODEL } from '@/store/types';

interface StateData {
  radioDefVal: string;
  redioVal: string;
  topB: any;
  bottomB: any;
  siderEditWidth: string;
  siderWidthType: string;
}
@Component({
  components: {
    DeawerGroup,
  },
})
export default class EditSider extends Vue {
  private State: StateData = {
    radioDefVal: 'null',
    siderWidthType: '',
    redioVal: 'a',
    siderEditWidth: '280px',
    bottomB: {
      c: {
        value: 'c',
        tipName: '全局参数设置',
        icon: 'tool',
      },
      d: {
        value: 'd',
        tipName: '组件树',
        icon: 'deployment-unit',
      },
    },
    topB: {
      a: {
        value: 'a',
        tipName: '组件树',
        icon: 'deployment-unit',
      },
      b: {
        value: 'b',
        tipName: '组件',
        icon: 'calculator',
      },
    },
  };

  @Getter private EDITMODEL?: EDITMODEL;

  private get GETEDITMODEL() {
    return this.EDITMODEL;
  }

  @Watch('GETEDITMODEL')
  private changeGETEDITMODEL() {
    if (this.GETEDITMODEL === 'preview') {
      this.collapsed = false;
      setTimeout(() => {
        this.setSiderEditWidth(this.GETEDITMODEL);
        this.collapsed = true;
      }, 400);
    } else {
      this.collapsed = false;
      this.setSiderEditWidth(this.State.siderWidthType);
    }
  }

  private collapsed: boolean = false;

  // 设置是否弹出 侧边工具
  private toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  private changeButtonGroup(type: string, e: any) {
    this.State.redioVal = e.target.value;
    this.State.siderWidthType = type;
    if (!this.collapsed) {
      this.collapsed = true;
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

  private render() {
    const {
      collapsed,
      toggleCollapsed,
      State,
      changeButtonGroup,
      renderBtns,
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
        <div class='sider_edit'>{State.redioVal}</div>
      </div>
    );
  }
}
