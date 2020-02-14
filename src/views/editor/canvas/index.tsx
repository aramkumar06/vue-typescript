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

  private dragEnterFn(e: Event, type: String) {
    switch (type) {
      case 'page':
        break;
      case 'layout':
        break;
      default:
        break;
    }
  }

  private dragOverFn(e: Event, type: String) {
    e.preventDefault();
    switch (type) {
      case 'page':
        break;
      case 'layout':
        e.stopPropagation();
        break;
      default:
        break;
    }
  }

  private dropFn(e: any, type: String) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('componentInfo'));
    switch (type) {
      case 'page':
        this.pageContentAddLayout(data);
        break;
      case 'layout':
        e.stopPropagation();
        this.layoutChildrenAddComponent(data);
        break;
      default:
        break;
    }
  }

  private pageContentAddLayout(obj: any) {
    this.PAGE_CONTENT_ADD_LAYOUT(obj);
  }

  private layoutChildrenAddComponent(obj: any) {}

  private render() {
    return (
      <div
        id='edit_canvas'
        ondragenter={(e: Event) => {
          this.dragEnterFn(e, 'page');
        }}
        ondragover={(e: Event) => {
          this.dragOverFn(e, 'page');
        }}
        ondrop={(e: Event) => {
          this.dropFn(e, 'page');
        }}
      >
        setting：{JSON.stringify(this.getCanvasSetting)} <br />
        getGlobalArgs： {`\n${this.getGlobalArgs}`}
        {this.getPageContentInfo.children.map((item: any) => {
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
        })}
      </div>
    );
  }
}
