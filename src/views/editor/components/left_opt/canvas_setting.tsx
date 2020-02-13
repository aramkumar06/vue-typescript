import { Component, Vue, Ref, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import AlertCard from '@/views/editor/components/alert_card';
import util from '@/utils';
import { CANVAS_SETTING, viewport } from '@/store/modules/editOpt/type';
import edit from '../code_edit';

const editOpt = namespace('editOpt');

interface StateData {
  CodeEditType: 'code' | 'view';
  editVal: string | string[];
  form: CANVAS_SETTING;
  viewports: viewport[];
}

@Component({
  components: {
    edit,
    AlertCard,
  },
})
export default class globalArgs extends Vue {
  public state: StateData = {
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

  @Watch('state.form', { deep: true })
  private watchForm() {
    // 后续优化 减少计算
    this.jsonToCode('json');
  }

  @editOpt.State((state) => state.CANVAS_SETTING)
  private canvasSetting!: CANVAS_SETTING;

  @editOpt.Mutation private SET_CANVAS_SETTING!: Function;

  @editOpt.Mutation private MUT_COLLAPSED!: Function;

  private jsonToCode(type: 'json' | 'code') {
    if (type === 'code') {
      // string to json
      const code: any[] = this.edit
        .getvalue()
        .replace('export default ', '')
        .replace(/\n/g, '')
        .replace(/ /g, '')
        .replace(/{|}/g, '')
        .replace(/""/g, '"')
        .split(',');
      const data: CANVAS_SETTING = this.state.form;
      code.forEach((element) => {
        const li: any[] = element.split(':');
        if (li.length > 0) {
          const key = li[0].replace(/"/g, '') || '';
          let val = li[1] || '';
          if (Number(val)) {
            val = Number(val);
          } else {
            val = val.replace(/"/g, '').replace(/'/g, '');
          }

          if (this.state.form[key]) {
            data[key] = val;
          }
        }
      });
      this.state.form = data;
    } else {
      // json to string code

      let code: any = JSON.stringify(this.state.form)
        .replace(/{|}/g, '\n')
        .split('\n');
      const codeData: any | [] = code[1]
        .split(',')
        .join(',\n')
        .replace(' ', '');
      code = `export default {\n ${codeData} \n}`;
      this.state.editVal = code;
    }
  }

  private created() {
    this.state.form = { ...this.canvasSetting };
  }

  private changeCodeEdit() {
    if (this.state.CodeEditType === 'code') {
      this.state.CodeEditType = 'view';
      this.jsonToCode('code');
      return;
    }
    this.state.CodeEditType = 'code';
  }

  private handleSubmit() {
    console.log('save');
  }

  @Ref() readonly edit!: any;

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
              <a-input
                v-model={state.form.width}
                style=' text-align: center'
                placeholder='Minimum'
              >
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
                v-model={state.form.height}
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
    if (this.state.CodeEditType === 'code') {
      this.state.CodeEditType = 'view';
      this.jsonToCode('code');
    }

    // 存放如 缓存
    this.SET_CANVAS_SETTING(this.state.form);
    // this.MUT_COLLAPSED(false);
  }

  private get renderBody(): JSX.Element {
    if (this.state.editVal === '') {
      this.state.editVal = util.editDefaultVal.canvasSetting;
    }
    return this.state.CodeEditType === 'code' ? (
      <edit
        ref='edit'
        value={this.state.editVal}
        slot='body'
        style='height:100%;'
      />
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
