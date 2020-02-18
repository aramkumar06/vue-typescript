import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator';
import bhabgsLabel from './label';

interface StateData {
  value: string;
}

@Component({
  components: { bhabgsLabel },
})
export default class RadioGroupLabel extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: [],
  })
  private map!: Array<any>;

  @Prop({
    type: String,
    default: 'small',
  })
  private size!: string;

  @Prop({
    default: 'Title',
    required: false,
    type: String,
  })
  private title!: string;

  @Model('input', { type: String })
  private value!: string;

  @Emit('input')
  private changeValue(e: string) {
    return e;
  }

  private created() {
    this.state.value = this.value;
  }

  private state: StateData = {
    value: '',
  };

  private onChange(e: any) {
    this.changeValue(e.target.value);
  }

  // 渲染按钮组 加 tip 提示
  private renderTip(
    title: string,
    icon: string,
    value: any,
    position?: string,
  ): JSX.Element {
    position = position || 'top';

    return (
      <a-tooltip placement={position}>
        <template slot='title'>
          <span>{title}</span>
        </template>
        <a-radio-button value={value}>
          <a-icon type={icon} />
        </a-radio-button>
      </a-tooltip>
    );
  }

  render() {
    const { renderTip, state, title, $slots, onChange, size } = this;
    return (
      <bhabgsLabel title={title}>
        {$slots.title ? <div slot='title'>{$slots.title}</div> : ''}
        <a-radio-group
          onChange={onChange}
          size={size}
          v-model={state.value}
          slot='control'
        >
          {this.map.map((item, key) => {
            return renderTip(item.title, item.icon, item.value);
          })}
        </a-radio-group>
      </bhabgsLabel>
    );
  }
}
