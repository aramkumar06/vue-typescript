import { Vue, Component, Prop, Ref } from 'vue-property-decorator';

@Component
export default class CodeEdit extends Vue {
  @Prop({
    default: ['export default {', '}'].join('\n'),
  })
  private value?: any;

  private Editor: any = null;

  private mounted() {
    const { value } = this;
    this.Editor = this.$Editor.editor.create(
      document.getElementById('code_edit'),
      {
        language: 'typescript',
        theme: 'vs', // -dark
        value,
        automaticLayout: true,
        // 代码略缩图
        minimap: {
          enabled: false,
        },
        readOnly: false,
      },
    );
  }

  private getvalue() {
    return this.Editor.getValue();
  }

  private render() {
    return <div id='code_edit'></div>;
  }
}
