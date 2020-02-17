import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { EDITMODEL } from '@/store/types';
import StylePlate from './style_plate';

const editOpt = namespace('editOpt');

@Component({
  components: {
    StylePlate,
  },
})
export default class rightOpt extends Vue {
  @editOpt.Getter private EDITMODEL?: EDITMODEL;

  private get GETEDITMODEL() {
    return this.EDITMODEL;
  }

  private tabs: any[] = [
    {
      title: '样式',
      comp: 'StylePlate',
    },
    {
      title: '属性',
      comp: '',
    },
    {
      title: '事件',
    },
    {
      title: '数据',
      comp: '',
    },
  ];

  private renderComp(type: string): JSX.Element {
    let comp: JSX.Element = <div></div>;
    switch (type) {
      case 'StylePlate':
        comp = <StylePlate />;
        break;
      default:
        comp = <div></div>;
    }
    return comp;
  }

  get renderTabs(): JSX.Element {
    return (
      <a-tabs type='card' defaultActiveKey={0}>
        {this.tabs.map((item, key) => {
          return (
            <a-tab-pane tab={item.title} key={key}>
              {this.renderComp(item.comp)}
            </a-tab-pane>
          );
        })}
      </a-tabs>
    );
  }

  private render() {
    const { renderTabs } = this;
    return (
      <div
        id='right_opt'
        class={this.GETEDITMODEL === 'preview' ? 'in_preview' : ''}
      >
        {renderTabs}
      </div>
    );
  }
}
