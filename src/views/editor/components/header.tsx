import { Vue, Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import { EDITMODEL } from '@/store/types';

interface radio {
  name: string;
  icon: string;
  value: EDITMODEL;
}
interface StateData {
  radioVal: EDITMODEL;
  radios: Array<radio>;
}

@Component
export default class Headercanvas extends Vue {
  @Getter private EDITMODEL?: EDITMODEL;

  @Mutation private EDIT_MODEL: any;

  private get GETEDITMODEL() {
    return this.EDITMODEL;
  }

  private State: StateData = {
    radioVal: 'edit',
    radios: [
      {
        name: '布局模式',
        icon: 'layout',
        value: 'edit',
      },
      {
        name: '预览模式',
        icon: 'desktop',
        value: 'preview',
      },
    ],
  };

  private onChange(e: any) {
    this.EDIT_MODEL(e.target.value);
  }

  private toModule() {
    this.$router.push('/project/module/:pid/:mid');
  }

  private renderRadios(): JSX.Element {
    const { onChange, State } = this;
    return (
      <a-radio-group onChange={onChange} v-model={State.radioVal}>
        {State.radios.map((item, key) => {
          return (
            <a-radio-button value={item.value}>
              <a-icon type={item.icon} /> {item.name}
            </a-radio-button>
          );
        })}
      </a-radio-group>
    );
  }

  private render() {
    const { renderRadios } = this;
    return (
      <header id='header' class='editor-header'>
        <div class='left'>
          <a-button
            onClick={this.toModule}
            class='back_btn'
            type='primary'
            shape='circle'
            icon='left'
          />
          Malyan
        </div>
        <div class='option-box'>
          {renderRadios()}
          <ul>
            <li>
              <a-button-group size='large'>
                <a-tooltip placement='bottom'>
                  <template slot='title'>
                    <span>上一步</span>
                  </template>
                  <a-button icon='undo' size='small' />
                </a-tooltip>
                <a-tooltip placement='bottom'>
                  <template slot='title'>
                    <span>下一步</span>
                  </template>
                  <a-button icon='redo' size='small' />
                </a-tooltip>
                <a-tooltip placement='bottom'>
                  <template slot='title'>
                    <span>保存</span>
                  </template>
                  <a-button type='primary' icon='cloud-upload' />
                </a-tooltip>
              </a-button-group>
            </li>

            <li>
              <a-button shape='circle' icon='user' />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
