import { Vue, Component, Watch, Model, Emit } from 'vue-property-decorator';
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
  li: {
    text: string;
    position?: tipPosition;
    color?: string;
    style?: borderStyle;
    size?: number;
  }[];
}

@Component
export default class BorderComp extends Vue {
  private state: StateData | any = {
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
  private value!: any;

  @Watch('value.borderType')
  private a() {
    // this.value.borderRadius = [0, 0, 0, 0];
  }

  // 根据需求渲染border-radius
  private renderBorderRadius() {
    const { value } = this;
    const li: JSX.Element[] = [
      <bhabgsLabel title=''>
        <sliderInput
          max={100}
          min={1}
          step={1}
          unit='px'
          slot='control'
          v-model={value.borderRadius[0]}
        />
      </bhabgsLabel>,
      <bhabgsLabel title=''>
        <a-row slot='control' class='custom_border'>
          <a-col span='12'>
            左上：
            <a-input-number v-model={value.borderRadius[0]} />
          </a-col>
          <a-col span='12'>
            右上：
            <a-input-number v-model={value.borderRadius[1]} />
          </a-col>
          <a-col span='12'>
            左下：
            <a-input-number v-model={value.borderRadius[3]} />
          </a-col>
          <a-col span='12'>
            右 下：
            <a-input-number v-model={value.borderRadius[2]} />
          </a-col>
        </a-row>
      </bhabgsLabel>,
    ];

    if (value.borderType === 'custom') {
      return li[1];
    }
    return li[0];
  }

  // 渲染九宫格border
  private renderSudoku() {
    const { state, value } = this;
    const who = value.li[value.borderPosition];
    return (
      <bhabgsLabel title=''>
        <div slot='control'>
          <div class='sudoku'>
            <div class='sudoku_box'>
              {value.li.map((item: any, key: number) => {
                return (
                  <div
                    class={[value.borderPosition === key ? 'active' : '']}
                    onClick={() => {
                      if (item.text) {
                        value.borderPosition = key;
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
    const { state, renderSudoku, renderBorderRadius, value } = this;
    return (
      <div id='border_comp' class='bhabgs_form'>
        <radioFroupLabel
          map={state.borderTypes}
          v-model={value.borderType}
          title='角度规则: '
        />

        {renderBorderRadius()}
        {renderSudoku()}
      </div>
    );
  }
}
