import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { CANVAS_SETTING } from '@/store/modules/editOpt/type';

const editOpt = namespace('editOpt');

@Component
export default class EditCanvas extends Vue {
  @editOpt.Getter private CANVAS_SETTING!: CANVAS_SETTING;

  @editOpt.Getter private globalArgs!: string;

  get getGlobalArgs(): string {
    return this.globalArgs;
  }

  get getCanvasSetting(): CANVAS_SETTING {
    return this.CANVAS_SETTING;
  }

  private dragEnterFn(e: Event) {
    console.log('dragEnterFn');
  }
  private dragOverFn(e: Event) {
    e.preventDefault();
    console.log('dragOverFn');
  }
  private dropFn(e: any) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('componentInfo'));
    console.log('dropFn', data);
  }
  private render() {
    return (
      <div
        id='edit_canvas'
        ondragenter={(e: Event) => {
          this.dragEnterFn(e);
        }}
        ondragover={(e: Event) => {
          this.dragOverFn(e);
        }}
        ondrop={(e: Event) => {
          this.dropFn(e);
        }}
      >
        setting：{JSON.stringify(this.getCanvasSetting)} <br />
        getGlobalArgs： {`\n${this.getGlobalArgs}`}{' '}
      </div>
    );
  }
}
