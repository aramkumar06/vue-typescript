import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace, Getter, Mutation } from 'vuex-class';
import { CANVAS_SETTING } from '@/store/modules/editOpt/type';

const editOpt = namespace('editOpt');
const pageData = namespace('pageData');

@Component
export default class EditCanvas extends Vue {
  @editOpt.Getter private CANVAS_SETTING!: CANVAS_SETTING;

  @editOpt.Getter private globalArgs!: string;

  @pageData.Getter private getPageContent!: any;

  @pageData.Mutation private ADD_TO_CHILDREN: any;

  get getGlobalArgs(): string {
    return this.globalArgs;
  }

  get getCanvasSetting(): CANVAS_SETTING {
    return this.CANVAS_SETTING;
  }

  get getPageContentInfo(): any {
    return this.getPageContent;
  }

  private dragEnterFn(e: Event) {
    //
  }

  private dragOverFn(e: Event) {
    e.preventDefault();
  }

  private dropFn(e: any) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('componentInfo'));
    data.id = `Layout${Date.parse(new Date().toString()) / 1000}`;
    this.pageContentAddLayout(data);
  }

  private pageContentAddLayout(obj: any) {
    if (obj.type !== 'layout') {
      this.$message.error('请添加布局组件');
      return;
    }
    this.ADD_TO_CHILDREN({
      component: obj,
      parentId: this.getPageContentInfo.id,
    });
  }

  private layoutDronFn(obj: any) {
    this.ADD_TO_CHILDREN({
      component: obj.componentInfo,
      parentId: obj.currentComponent,
    });
  }

  private setlayout(arr: any[]) {
    return arr.map((item) => {
      if (item.type === 'layout') {
        return (
          <layout ondropfn={this.layoutDronFn} layoutId={item.id}>
            {this.setlayout(item.children)}
          </layout>
        );
      }
      return <div>将来我是组件{item.name}</div>;
    });
  }

  private render() {
    return (
      <div
        id='edit_canvas'
        ondragenter={this.dragEnterFn}
        ondragover={this.dragOverFn}
        ondrop={this.dropFn}
      >
        setting：{JSON.stringify(this.getCanvasSetting)} <br />
        getGlobalArgs： {`\n${this.getGlobalArgs}`}
        {this.getPageContentInfo.children.map((item: any) => {
          return (
            <layout ondropfn={this.layoutDronFn} layoutId={item.id}>
              {this.setlayout(item.children)}
            </layout>
          );
        })}
        <pre>{JSON.stringify(this.getPageContentInfo, null, '\t')}</pre>
      </div>
    );
  }
}
