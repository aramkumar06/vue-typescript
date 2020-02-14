import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace, Getter, Mutation } from 'vuex-class';
import { CANVAS_SETTING } from '@/store/modules/editOpt/type';

const editOpt = namespace('editOpt');

@Component
export default class EditCanvas extends Vue {
  @editOpt.Getter private CANVAS_SETTING!: CANVAS_SETTING;

  @editOpt.Getter private globalArgs!: string;

  @Getter private getPageContent!: any;

  @Mutation private PAGE_CONTENT_ADD_LAYOUT: any;

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
    this.PAGE_CONTENT_ADD_LAYOUT(obj);
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
<<<<<<< HEAD
          return <layout opt={item} />;
=======
          return (
            <layout
              class='layout'
              ondragenter={(e: Event) => {
                this.dragEnterFn(e, 'layout');
              }}
              ondragover={(e: Event) => {
                this.dragOverFn(e, 'layout');
              }}
              ondrop={(e: Event) => {
                this.dropFn(e, 'layout');
              }}
            />
          );
>>>>>>> 0b3c2a3ff925f13b6926e5ebc9f358baead93c42
        })}
      </div>
    );
  }
}
