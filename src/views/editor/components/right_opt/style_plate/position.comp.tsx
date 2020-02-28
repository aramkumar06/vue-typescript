import { Vue, Component, Watch } from 'vue-property-decorator';
import { labelMap } from '@/components/style/radioGroupLabel';
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
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
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

  @Watch('state.form', { deep: true })
  private changePosition() {
    console.log(this.state.form);
  }

  render() {
    const { state } = this;
    return (
      <div id='PositionComp' class='bhabgs_form'>
        <bhabgsLabel title='定位类型：'>
          <a-select
            v-model={state.form.position}
            slot='control'
            style='width:100%;'
          >
            {state.positions.map((item, key) => {
              return (
                <a-select-option value={item.position}>
                  {item.title}
                </a-select-option>
              );
            })}
          </a-select>
        </bhabgsLabel>
        {state.form.position !== 'static' ? (
          <div>
            <bhabgsLabel title=''>
              <div class='position_tlbr' slot='control'>
                <div class='top_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    value=''
                  />
                </div>
                <div class='right_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    value=''
                  />
                </div>
                <div class='bottom_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    value=''
                  />
                </div>
                <div class='left_div'>
                  <input
                    placeholder='auto'
                    maxlength='6'
                    height='100%'
                    autocomplete='off'
                    value=''
                  />
                </div>
              </div>
            </bhabgsLabel>
            <bhabgsLabel title='层级顺序'>
              <div slot='control'>
                <a-input type='number' v-model={state.form.zIndex}></a-input>
              </div>
            </bhabgsLabel>
          </div>
        ) : (
          ''
        )}

        <radioFroupLabel
          map={state.float}
          v-model={state.form.float}
          title='浮动方向：'
        />
      </div>
    );
  }
}
