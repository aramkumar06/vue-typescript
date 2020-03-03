import { Vue, Component, Watch, Model, Emit } from 'vue-property-decorator';
import util from '@/utils';
import { labelMap } from '@/components/style/radioGroupLabel';
import { Border, borderStyle, tipPosition } from './style';

interface StateData {
  borderType: 'radius' | 'custom';
  borderTypes: labelMap[];
  form: Border;
  color: string;
  size: number;
  borderStyle: borderStyle;
  borderStyles: labelMap[];
  borderPosition: number;
}

@Component
export default class BorderComp extends Vue {
  private state: StateData = {
    form: {
      borderRadius: [0, 0, 0, 0],
      borderLeft: '',
      borderRight: '',
      borderTop: '',
      borderBottom: '',
      border: '',
    },
    size: 0,
    color: '#000000',
    borderType: 'radius',
    borderPosition: 4,
    borderTypes: [
      {
        title: '统一角度',
        value: 'radius',
      },
      {
        title: '自定义角度',
        value: 'custom',
      },
    ],
    borderStyle: 'hidden',
    borderStyles: [
      {
        title:
          'hidden 与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突',
        value: 'hidden',
      },
      {
        title: 'dotted 定义点状边框。在大多数浏览器中呈现为实线',
        value: 'dotted',
      },
      {
        title: 'dashed 定义虚线。在大多数浏览器中呈现为实线',
        value: 'dashed',
      },
      {
        title: 'solid 定义实线',
        value: 'solid',
      },
      {
        title: 'double 定义双线。双线的宽度等于 border-width 的值',
        value: 'double',
      },
    ],
  };

  @Model('input', { type: Object })
  private value!: Border;

  @Watch('state.form', { deep: true })
  @Watch('li', { deep: true })
  @Emit('input')
  private sendStyle() {
    const styleData: any = {};
    const { state, li } = this;
    const who = li[state.borderPosition];

    if (state.borderPosition === 4) {
      // 统一边框
      styleData.border = `${who.size}px ${who.style} ${who.color}`;
    } else {
      const top = li[1];
      const left = li[3];
      const right = li[5];
      const bottom = li[7];
      styleData.borderTop = `${top.size}px ${top.style} ${top.color}`;
      styleData.borderLeft = `${left.size}px ${left.style} ${left.color}`;
      styleData.borderRight = `${right.size}px ${right.style} ${right.color}`;
      styleData.borderBottom = `${bottom.size}px ${bottom.style} ${bottom.color}`;
    }

    // 处理border- radius
    if (state.borderType === 'radius') {
      styleData.borderRadius = `${state.form.borderRadius[0]}px`;
    } else {
      styleData.borderRadius = `${state.form.borderRadius[0]}px ${state.form.borderRadius[1]}px ${state.form.borderRadius[2]}px ${state.form.borderRadius[3]}px`;
    }

    return util.JSON_STYLE_TO_STRING(styleData);
  }

  @Watch('state.borderType')
  private watchType() {
    this.$nextTick(() => {
      this.state.form.borderRadius = [0, 0, 0, 0];
    });
  }

  private created() {
    this.state.form = Object.assign(this.state.form, this.value);
    this.sendStyle();
  }

  private li: {
    text: string;
    position?: tipPosition;
    color?: string;
    style?: borderStyle;
    size?: number;
  }[] = [
    {
      text: '',
    },
    {
      text: '上',
      size: 1,
      style: 'solid',
      color: '#000000',
    },
    {
      text: '',
    },
    {
      text: '左',
      position: 'left',
      size: 1,
      style: 'solid',
      color: '#000000',
    },
    {
      text: '全',
      size: 1,
      style: 'solid',
      color: '#000000',
    },
    {
      text: '右',
      position: 'right',
      style: 'solid',
      size: 1,
      color: '#000000',
    },
    {
      text: '',
    },
    {
      text: '下',
      position: 'bottom',
      size: 1,
      style: 'solid',
      color: '#000000',
    },
    {
      text: '',
    },
  ];

  // 根据需求渲染border-radius
  private renderBorderRadius() {
    const { state } = this;
    const li: JSX.Element[] = [
      <bhabgsLabel title=''>
        <sliderInput
          max={100}
          min={1}
          step={1}
          unit='px'
          slot='control'
          v-model={state.form.borderRadius[0]}
        />
      </bhabgsLabel>,
      <bhabgsLabel title=''>
        <a-row slot='control' class='custom_border'>
          <a-col span='12'>
            左上：
            <a-input-number v-model={state.form.borderRadius[0]} />
          </a-col>
          <a-col span='12'>
            右上：
            <a-input-number v-model={state.form.borderRadius[1]} />
          </a-col>
          <a-col span='12'>
            左下：
            <a-input-number v-model={state.form.borderRadius[2]} />
          </a-col>
          <a-col span='12'>
            右 下：
            <a-input-number v-model={state.form.borderRadius[3]} />
          </a-col>
        </a-row>
      </bhabgsLabel>,
    ];

    if (state.borderType === 'custom') {
      return li[1];
    }
    return li[0];
  }

  // 渲染九宫格border
  private renderSudoku() {
    const { li, state } = this;
    const who = li[state.borderPosition];
    return (
      <bhabgsLabel title=''>
        <div slot='control'>
          <div class='sudoku'>
            <div class='sudoku_box'>
              {li.map((item, key) => {
                return (
                  <div
                    class={[state.borderPosition === key ? 'active' : '']}
                    onClick={() => {
                      if (item.text) {
                        state.borderPosition = key;
                      }
                    }}
                  >
                    {item.text ? (
                      <a-tooltip placement={item.position || 'top'}>
                        <template slot='title'>
                          <span>{item.text}</span>
                        </template>
                        {item.text}
                      </a-tooltip>
                    ) : (
                      ''
                    )}
                  </div>
                );
              })}
            </div>
            <div class='opt'>
              <colorInput slot='control' v-model={who.color} />
              <a-input-number v-model={who.size} />
            </div>
          </div>
          <div class='border_style'>
            样式：
            <radioFroupLabel
              hasTitle={false}
              map={state.borderStyles}
              v-model={who.style}
            />
          </div>
        </div>
      </bhabgsLabel>
    );
  }

  private render() {
    const { state, renderSudoku, renderBorderRadius } = this;
    return (
      <div id='border_comp' class='bhabgs_form'>
        <radioFroupLabel
          map={state.borderTypes}
          v-model={state.borderType}
          title='角度规则: '
        />

        {renderBorderRadius()}
        {renderSudoku()}
      </div>
    );
  }
}
