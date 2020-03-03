import { Vue, Component, Watch, Emit, Model } from 'vue-property-decorator';
import { labelMap } from '@/components/style/radioGroupLabel';
import { Background } from './style';

interface StateData {
  form: Background;
  backgroundTypes: labelMap[];
  backgroundType: 'img' | 'color';
  backgroundRepeat: labelMap[];
}

@Component
export default class BackgroundComp extends Vue {
  private state: StateData = {
    form: {
      background: '#ffffff',
      backgroundRepeat: 'no-repeat',
    },
    backgroundType: 'color',
    backgroundTypes: [
      {
        title: '图片',
        icon: 'picture',
        value: 'img',
      },
      {
        title: '背景色',
        icon: 'bg-colors',
        value: 'color',
      },
    ],
    backgroundRepeat: [
      {
        title: '垂直方向与水平方向重复 repeat',
        icon: 'appstore',
        value: 'repeat',
      },
      {
        title: '水平方向重复 repeat-x',
        icon: 'bg-colors',
        value: 'repeat-x',
      },
      {
        title: '垂直方向重复 repeat-y',
        icon: 'bg-colors',
        value: 'repeat-y',
      },
      {
        title: '不重复 no-repeat',
        icon: 'bg-colors',
        value: 'no-repeat',
      },
    ],
  };

  @Model('input', { type: Object })
  private value!: Background;

  @Watch('state.form', { deep: true })
  @Emit('input')
  private sendStyle() {
    return this.state.form;
  }

  @Watch('value')
  private valWatch() {
    this.state.form = Object.assign(this.state.form, this.value);
  }

  private created() {
    this.state.form = Object.assign(this.state.form, this.value);
    this.sendStyle();
  }

  // 检测背景类型变化 进行reset
  @Watch('state.backgroundType', { deep: true })
  private watchVal() {
    if (this.state.backgroundType === 'img') {
      this.state.form.background = '';
    } else {
      this.state.form.background = '#ffffff';
    }
  }

  // 根据背景类型渲染所需dom
  private get renderbackgroundType(): JSX.Element {
    const { state } = this;
    const el: JSX.Element[] = [
      <bhabgsLabel title=''>
        <colorInput slot='control' v-model={state.form.background} />
      </bhabgsLabel>,
      <div>
        <bhabgsLabel title=''>
          <a-input
            slot='control'
            v-model={state.form.background}
            placeholder='请输入图片url'
          ></a-input>
        </bhabgsLabel>
        <radioFroupLabel
          title='重复显示：'
          map={state.backgroundRepeat}
          v-model={state.form.backgroundRepeat}
        />
      </div>,
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
