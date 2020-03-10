import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { EDITMODEL } from '@/store/types';
import StylePlate from './style_plate';
import SourceData from './data_source';

const editOpt = namespace('editOpt');

@Component({
  components: {
    StylePlate,
    SourceData,
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
      comp: 'SourceData',
    },
  ];

  get renderTabs(): JSX.Element {
    return (
      <a-tabs type='card' defaultActiveKey={0}>
        {this.tabs.map((item, key) => {
          return (
            <a-tab-pane tab={item.title} key={key}>
              <item.comp />
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
