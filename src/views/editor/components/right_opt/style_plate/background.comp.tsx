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

  // 检测背景类型变化 进行reset
  @Watch('state.backgroundType', { deep: true })
  private watchVal() {
    if (this.state.backgroundType === 'img') {
      this.value.background = '';
    } else {
      this.value.background = '#ffffff';
    }
  }

  // 根据背景类型渲染所需dom
  private get renderbackgroundType(): JSX.Element {
    const { state } = this;
    const el: JSX.Element[] = [
      <bhabgsLabel title=''>
        <colorInput slot='control' v-model={this.value.background} />
      </bhabgsLabel>,
      <div>
        <bhabgsLabel title=''>
          <a-input
            slot='control'
            v-model={this.value.background}
            placeholder='请输入图片url'
          ></a-input>
        </bhabgsLabel>
        <radioFroupLabel
          title='重复显示：'
          map={state.backgroundRepeat}
          v-model={this.value.backgroundRepeat}
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
