import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CodeEdit extends Vue {
  @Prop({
    default: ['export default {', '}'].join('\n'),
  })
  private value?: any;

  private mounted() {
    const { value } = this;
    this.$Editor.editor.create(document.getElementById('code_edit'), {
      language: 'typescript',
      theme: 'vs', // -dark
      value,
      automaticLayout: true,
      // 代码略缩图
      minimap: {
        enabled: false,
      },
      readOnly: false,
    });
  }

  private render() {
    return <div id='code_edit'></div>;
  }
}
