import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import { layout } from '@/utils/baseData/type';

@Component
export default class Layout extends Vue {
  @Getter private getPageContent!: any;

  @Mutation private LAYOUT_CHILDREN_ADD_COMPONENT: any;

  @Prop() private opt?: layout;

  get getPageContentInfo(): any {
    return this.getPageContent;
  }

  private dragEnterFn(e: Event) {
    //
  }

  private dragOverFn(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  private dropFn(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = JSON.parse(e.dataTransfer.getData('componentInfo'));
    data.id = `Component${Date.parse(new Date().toString()) / 1000}`;
    this.layoutChildrenAddComponent(data);
  }

  private layoutChildrenAddComponent(obj: any) {
    if (obj.type !== 'component') {
      this.$message.error('请添加组件');
      return;
    }
    this.LAYOUT_CHILDREN_ADD_COMPONENT({
      component: obj,
      currentLayout: this.opt,
    });
  }

  render() {
    return (
      <div
        class='layout'
        ondragenter={this.dragEnterFn}
        ondragover={this.dragOverFn}
        ondrop={this.dropFn}
      >
        <pre>{JSON.stringify(this.getPageContentInfo, null, '\t')}</pre>
      </div>
    );
  }
}
