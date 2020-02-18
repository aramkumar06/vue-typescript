import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { layout } from '@/utils/baseData/type';
import util from '../../util';

const pageData = namespace('pageData');

@Component
export default class Layout extends Vue {
  @pageData.Mutation private LAYOUT_CHILDREN_ADD_COMPONENT: any;

  @Prop() private layoutinfo?: layout;

  private dragOverFn(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  // @Emit()
  private dropFn(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = JSON.parse(e.dataTransfer.getData('componentInfo'));
    data.id = `Component${util.getId()}`;
    this.layoutChildrenAddComponent(data);
  }

  private layoutChildrenAddComponent(obj: any) {
    if (obj.type !== 'component') {
      this.$message.error('请添加组件');
      return;
    }
    this.LAYOUT_CHILDREN_ADD_COMPONENT({
      component: obj,
      currentLayout: this.layoutinfo,
    });
  }

  render() {
    return (
      <div class='layout' ondragover={this.dragOverFn} ondrop={this.dropFn}>
        <slot>
          <pre>{JSON.stringify(this.layoutinfo, null, '\t')}</pre>
        </slot>
      </div>
    );
  }
}
