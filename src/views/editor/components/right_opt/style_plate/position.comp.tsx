import { Vue, Component, Watch, Model, Emit } from 'vue-property-decorator';
import { labelMap } from '@/components/style/radioGroupLabel';
import util from '@/utils';
import { Position, positions } from './style';

interface position {
  position: positions;
  title: string;
}

interface StateData {
  form: Position;
  float: labelMap[];
  positions: position[];
}

@Component
export default class PositionComp extends Vue {
  private state: StateData = {
    form: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 0,
      float: 'none',
      position: 'static',
    },
    positions: [
      {
        position: 'absolute',
        title: '绝对定位 absolute',
      },
      {
        position: 'fixed',
        title: '固定定位 fixed',
      },
      {
        position: 'relative',
        title: '相对定位 relative',
      },
      {
        position: 'static',
        title: '无定位 static',
      },
    ],
    float: [
      {
        icon: 'close',
        title: '不浮动',
        value: 'none',
      },
      {
        icon: '',
        title: '左浮动',
        value: 'left',
      },
      {
        icon: '',
        title: '右浮动',
        value: 'right',
      },
    ],
  };

  @Model('input', { type: Object })
  private value!: Position;

  render() {
    const { state, value } = this;
    return (
      <div id='PositionComp' class='bhabgs_form'>
        <bhabgsLabel title='定位类型：'>
          <a-select v-model={value.position} slot='control' style='width:100%;'>
            {state.positions.map((item, key) => {
              return (
                <a-select-option value={item.position}>
                  {item.title}
                </a-select-option>
              );
            })}
          </a-select>
        </bhabgsLabel>
        {value.position !== 'static' ? (
          <div>
            <bhabgsLabel title=''>
              <div class='position_tlbr' slot='control'>
                <div class='top_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    v-model={value.top}
                  />
                </div>
                <div class='right_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    v-model={value.right}
                  />
                </div>
                <div class='bottom_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    v-model={value.bottom}
                  />
                </div>
                <div class='left_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    v-model={value.left}
                  />
                </div>
              </div>
            </bhabgsLabel>
            <bhabgsLabel title='层级顺序'>
              <div slot='control'>
                <a-input type='number' v-model={value.zIndex}></a-input>
              </div>
            </bhabgsLabel>
          </div>
        ) : (
          ''
        )}

        <radioFroupLabel
          map={state.float}
          v-model={value.float}
          title='浮动方向：'
        />
      </div>
    );
  }
}
