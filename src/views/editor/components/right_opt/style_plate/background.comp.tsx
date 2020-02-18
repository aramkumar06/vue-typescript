import { Vue, Component, Watch } from 'vue-property-decorator';
import { Background } from './style';
import radioFroupLabel from '../../radioGroupLabel';
import bhabgsLabel from '../../label';

interface StateData {
  form: Background;
  backgroundTypes: any[];
  backgroundType: string;
}

@Component({
  components: { radioFroupLabel, bhabgsLabel },
})
export default class BackgroundComp extends Vue {
  private state: StateData = {
    form: {
      background: '#ffffff',
    },
    backgroundType: 'color',
    backgroundTypes: [
      {
        title: '图片',
        icon: 'fund',
        value: 'img',
      },
      {
        title: '背景色',
        icon: 'bg-colors',
        value: 'color',
      },
    ],
  };

  @Watch('backgroundType', { deep: true })
  private watchVal() {
    this.state.form.background = '';
  }

  private get renderbackgroundType(): JSX.Element {
    const el: JSX.Element[] = [
      <bhabgsLabel title=''>
        <a-input slot='control' value={this.state.form.background}>
          <input
            slot='addonBefore'
            v-model={this.state.form.background}
            type='color'
          />
        </a-input>
      </bhabgsLabel>,

      <bhabgsLabel title=''>
        <a-input
          slot='control'
          v-model={this.state.form.background}
          placeholder='请输入图片url'
        ></a-input>
      </bhabgsLabel>,
    ];

    if (this.state.backgroundType === 'color') {
      return el[0];
    }
    return el[1];
  }

  render(): JSX.Element {
    const { state, renderbackgroundType } = this;
    return (
      <div class='bhabgs_form' id='background_comp'>
        <radioFroupLabel
          title='背景类型：'
          size='default'
          map={state.backgroundTypes}
          v-model={state.backgroundType}
        />
        {renderbackgroundType}
      </div>
    );
  }
}
