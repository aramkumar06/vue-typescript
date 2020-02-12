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

  private render() {
    return (
      <div id='edit_canvas'>
        setting：{JSON.stringify(this.getCanvasSetting)} <br />
        getGlobalArgs： {`\n${this.getGlobalArgs}`}{' '}
      </div>
    );
  }
}
