import { Vue, Component } from 'vue-property-decorator';
import { layoutStyle } from './style';
import radioFroupLabel from '../../radioGroupLabel';
import bhabgsLabel from '../../label';

interface layout {
  title: string;
  icon: string;
  value: string;
}

interface StateData {
  form: layoutStyle;
  layouts: layout[];
  flexDirection: any[];
  justifyContent: any[];
  alignItems: any[];
  flexWarp: any[];
}

@Component({
  components: { radioFroupLabel, bhabgsLabel },
})
export default class LayoutComp extends Vue {
  private state: StateData = {
    form: {
      display: 'inline',
      margin: [0, 0, 20, 0],
      padding: [0, 10, 0, 0],
      width: '0px',
      height: '0px',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWarp: 'nowrap',
    },
    layouts: [
      {
        title: '内联布局 -- inline',
        icon: 'pic-center',
        value: 'inline',
      },
      {
        title: 'flex布局 -- flex',
        icon: 'appstore',
        value: 'flex',
      },
      {
        title: '块级布局 -- block',
        icon: 'border',
        value: 'block',
      },
      {
        title: '内联块级布局 -- inline-block',
        icon: 'border',
        value: 'inline-block',
      },
      {
        title: '隐藏 -- none',
        icon: 'eye-invisible',
        value: 'none',
      },
    ],
    flexDirection: [
      {
        title: '水平方向 - 起点在左端 row',
        icon: 'border',
        value: 'row',
      },
      {
        title: '逆水平方向 - 起点在左端 row-reverse',
        icon: 'border',
        value: 'row-reverse',
      },
      {
        title: '主轴为垂直方向 - 起点在上沿 column',
        icon: 'border',
        value: 'column',
      },
      {
        title: '主轴为垂直方向，起点在下沿 column-reverse',
        icon: 'border',
        value: 'column-reverse',
      },
    ],
    justifyContent: [
      {
        title: '水平方向 - 起点在左端 row',
        icon: 'border',
        value: 'flex-start',
      },
      {
        title: '水平方向 - 终点对齐 flex-end',
        icon: 'border',
        value: 'flex-end',
      },
      {
        title: '水平方向 - 中点对齐 center',
        icon: 'border',
        value: 'center',
      },
      {
        title: '两端对齐 space-between',
        icon: 'border',
        value: 'space-between',
      },
      {
        title: '横向评分 space-around',
        icon: 'border',
        value: 'space-around',
      },
    ],
    alignItems: [
      {
        title: '交叉轴的起点对齐 flex-start',
        icon: 'border',
        value: 'flex-start',
      },
      {
        title: '交叉轴的终点对齐 flex-end',
        icon: 'border',
        value: 'flex-end',
      },
      {
        title: '交叉轴的中点对齐 center',
        icon: 'border',
        value: 'center',
      },
      {
        title: '项目的第一行文字的基线对齐 baseline',
        icon: 'border',
        value: 'baseline',
      },
      {
        title: '如果项目未设置高度或设为auto，将占满整个容器的高度 stretch',
        icon: 'border',
        value: 'stretch',
      },
    ],
    flexWarp: [
      {
        title: '不换行 nowrap',
        icon: 'border',
        value: 'nowrap',
      },
      {
        title: '规定灵活的项目在必要的时候拆行或拆列 wrap',
        icon: 'border',
        value: 'wrap',
      },
      {
        title:
          '规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序 wrap-reverse',
        icon: 'border',
        value: 'wrap-reverse',
      },
    ],
  };

  private renderFlexStyle(): JSX.Element[] | string {
    const { state } = this;
    let flexElement: JSX.Element[] | string = '';

    if (this.state.form.display === 'flex') {
      flexElement = [
        <radioFroupLabel
          title='主轴方向'
          map={state.flexDirection}
          v-model={state.form.flexDirection}
        />,
        <radioFroupLabel
          title='主轴对齐'
          map={state.justifyContent}
          v-model={state.form.justifyContent}
        />,
        <radioFroupLabel
          title='辅轴对其'
          map={state.alignItems}
          v-model={state.form.alignItems}
        />,
        <radioFroupLabel
          title='换行'
          map={state.flexWarp}
          v-model={state.form.flexWarp}
        />,
      ];
    }
    return flexElement;
  }

  render(): JSX.Element {
    const { renderFlexStyle, state } = this;
    return (
      <div id='layout_comp' class='bhabgs_form'>
        <radioFroupLabel
          title='布局模式: '
          map={state.layouts}
          v-model={state.form.display}
        />
        {renderFlexStyle()}
        <bhabgsLabel title=''>
          <div slot='control' id='padding_margin'>
            <div class='margin_top_div' slot='control'>
              <span class='bhabgs_medium'>
                <input
                  placeholder='0'
                  maxlength='6'
                  height='100%'
                  autocomplete='off'
                  v-model={state.form.margin[0]}
                />
              </span>
            </div>

            <div class='margin_right_div'>
              <input
                placeholder='0'
                maxlength='6'
                height='100%'
                autocomplete='off'
                v-model={state.form.margin[3]}
              />
            </div>

            <div class='margin_bottom_div'>
              <span class='help_txt'>MARGIN</span>
              <input
                placeholder='0'
                maxlength='6'
                height='100%'
                autocomplete='off'
                v-model={state.form.margin[2]}
              />
            </div>

            <div class='margin_left_div'>
              <span class='margin_left_input'>
                <input
                  placeholder='0'
                  maxlength='6'
                  height='100%'
                  autocomplete='off'
                  v-model={state.form.margin[1]}
                />
              </span>
            </div>

            <div class='padding_top_div'>
              <input
                type='text'
                placeholder='0'
                v-model={state.form.padding[0]}
              />
            </div>

            <div class='padding_right_div'>
              <input
                type='text'
                placeholder='0'
                v-model={state.form.padding[3]}
              />
            </div>

            <div class='padding_bottom_div'>
              <span class='help_txt'>PADDING</span>
              <input
                type='text'
                placeholder='0'
                v-model={state.form.padding[2]}
              />
            </div>

            <div class='padding_left_div'>
              <input
                type='text'
                placeholder='0'
                v-model={state.form.padding[1]}
              />
            </div>
          </div>
        </bhabgsLabel>

        <bhabgsLabel title=''>
          <div class='width_height' slot='control'>
            <a-input v-model={state.form.width}>
              <span slot='addonAfter'>宽</span>
            </a-input>
            &nbsp;
            <a-input v-model={state.form.height}>
              <span slot='addonAfter'>高</span>
            </a-input>
          </div>
        </bhabgsLabel>
      </div>
    );
  }
}
