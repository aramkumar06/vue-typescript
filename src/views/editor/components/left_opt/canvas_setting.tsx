import { Component, Vue, Prop } from 'vue-property-decorator';
import AlertCard from '@/views/editor/components/alert_card';
import util from '@/utils';
import edit from '../code_edit';

type viewport = 'pc' | 'iphone7' | 'iphonex';

interface Form {
  backgroundColor: string;
  viewport: viewport;
  scale: number;
  width: string;
  height: string;
}

interface State {
  CodeEditType: 'code' | 'view';
  editVal: string | string[];
  form: Form;
  viewports: viewport[];
}

@Component({
  components: {
    edit,
    AlertCard,
  },
})
export default class globalArgs extends Vue {
  public state: State = {
    CodeEditType: 'view',
    editVal: '',
    viewports: ['iphone7', 'iphonex', 'pc'],
    form: {
      backgroundColor: '#000000',
      viewport: 'pc',
      scale: 100,
      height: '100%',
      width: '100%',
    },
  };

  private created() {}

  private changeCodeEdit() {
    if (this.state.CodeEditType === 'code') {
      this.state.CodeEditType = 'view';
      return;
    }
    this.state.CodeEditType = 'code';
  }

  private handleSubmit() {
    console.log('save');
  }

  private get renderViewBody(): JSX.Element {
    const { state } = this;
    return (
      <div slot='body' class='bhabgs_form body'>
        <div class='bhangs_item'>
          <span class='b_name'>背景颜色</span>
          <div class='b_context'>
            <a-input value={state.form.backgroundColor}>
              <input
                slot='addonBefore'
                v-model={state.form.backgroundColor}
                type='color'
              />
            </a-input>
          </div>
        </div>

        <div class='bhangs_item'>
          <span class='b_name'>画布类型</span>
          <div class='b_context'>
            <a-select v-model={state.form.viewport} style='width: 100%;'>
              {state.viewports.map((i, key) => {
                return <a-select-option value={i}>{i}</a-select-option>;
              })}
            </a-select>
          </div>
        </div>

        <div class='bhangs_item'>
          <span class='b_name'>画布缩放</span>
          <div class='b_context'>
            <a-input-number
              v-model={state.form.scale}
              min={0}
              max={100}
              style='width: 100%;'
              formatter={(value: any) => `${value}%`}
              parser={(value: any) => value.replace('%', '')}
            />
          </div>
        </div>

        <div class='bhangs_item'>
          <span class='b_name'>画布尺寸</span>
          <div class='b_context'>
            <a-input-group compact style='display: flex;'>
              <a-input style=' text-align: center' placeholder='Minimum'>
                <span slot='addonAfter' style='border-radius: 0;'>
                  W
                </span>
              </a-input>
              <a-input
                style=' width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff'
                placeholder='~'
                disabled
              />
              <a-input
                style=' text-align: center; border-left: 0'
                placeholder='Maximum'
              >
                <span slot='addonAfter' style='border-radius: 0;'>
                  H
                </span>
              </a-input>
            </a-input-group>
          </div>
        </div>
      </div>
    );
  }

  private onSave() {
    console.log(123);
  }

  private get renderBody(): JSX.Element {
    if (this.state.editVal === '') {
      this.state.editVal = util.editDefaultVal.canvasSetting;
    }
    return this.state.CodeEditType === 'code' ? (
      <edit value={this.state.editVal} slot='body' style='height:100%;' />
    ) : (
      this.renderViewBody
    );
  }

  private render() {
    const { changeCodeEdit, renderBody, onSave } = this;
    const alertCardComponentsTree = {
      props: {
        hasTitle: false,
        type: 'globalArgs',
      },
      attrs: {
        style: 'height:100%;',
      },
      on: {
        save() {
          onSave();
        },
      },
    };
    return (
      <AlertCard {...alertCardComponentsTree}>
        <div slot='title' class='title'>
          <span>canvas 画布设置</span>
          <div>
            <a-button
              onClick={changeCodeEdit}
              type='link'
            >{`编辑源码 </>`}</a-button>
          </div>
        </div>
        {renderBody}
      </AlertCard>
    );
  }
}
