import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import { EDITMODEL } from '@/store/types';

const editOpt = namespace('editOpt');

@Component
export default class rightOpt extends Vue {
  @editOpt.Getter private EDITMODEL?: EDITMODEL;

  private get GETEDITMODEL() {
    return this.EDITMODEL;
  }

  private tabs: any[] = [
    {
      title: '样式',
    },
    {
      title: '属性',
    },
    {
      title: '事件',
    },
    {
      title: '数据',
    },
  ];

  get renderTabs(): JSX.Element {
    return (
      <a-tabs type='card'>
        {this.tabs.map((item, key) => {
          return (
            <a-tab-pane tab={item.title} key={key}>
              {item.title}
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
