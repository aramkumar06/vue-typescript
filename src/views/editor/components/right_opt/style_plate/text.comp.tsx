import { Vue, Component } from 'vue-property-decorator';
import { labelMap } from '@/components/style/radioGroupLabel';
import { Font } from './style';

interface StateData {
  form: Font;
  textAlign: labelMap[];
  verticalAlign: labelMap[];
}

@Component
export default class TextComp extends Vue {
  private state: StateData = {
    form: {
      fontType: 'normal',
      fontSize: 16,
      textAlign: 'left',
      verticalAlign: 'top',
      opacity: 100,
      color: '#000000',
      lineHeight: 16,
    },
    textAlign: [
      {
        title: '左对对齐',
        value: 'left',
      },
      {
        title: '居中对齐',
        value: 'center',
      },
      {
        title: '右对对齐',
        value: 'right',
      },
      {
        title: '两端对齐',
        value: 'justify',
      },
    ],
    verticalAlign: [
      {
        title: '顶部对齐',
        value: 'top',
      },
      {
        title: '居中对齐',
        value: 'middle',
      },
      {
        title: '底部对对齐',
        value: 'bottom',
      },
      {
        title: '基线对齐',
        value: 'baseline',
      },
    ],
  };

  private render() {
    const { state } = this;
    return (
      <div id='text_comp' class='bhabgs_form'>
        <bhabgsLabel title='字符：'>
          <template slot='control'>
            <tip tip='文字大小'>
              <a-input-number v-model={state.form.fontSize} />
            </tip>
            <tip tip='行高'>
              <a-input-number v-model={state.form.lineHeight} />
            </tip>
          </template>
        </bhabgsLabel>
        <bhabgsLabel>
          <template slot='control'>
            <tip tip='字体样式'>
              <a-select v-model={state.form.fontType}>
                <a-select-option value='normal'>正常</a-select-option>
                <a-select-option value='oblique'>粗体</a-select-option>
                <a-select-option value='blod'>斜体</a-select-option>
              </a-select>
            </tip>

            <tip tip='字体颜色'>
              <colorInput v-model={state.form.color} />
            </tip>
          </template>
        </bhabgsLabel>
        <radioFroupLabel
          title='对齐方式：'
          map={state.textAlign}
          v-model={state.form.textAlign}
        />
        <radioFroupLabel
          title=''
          map={state.verticalAlign}
          v-model={state.form.verticalAlign}
        />
        <bhabgsLabel title='透明度：'>
          <sliderInput
            max={100}
            min={10}
            step={10}
            unit='%'
            slot='control'
            v-model={state.form.opacity}
          />
        </bhabgsLabel>
      </div>
    );
  }
}