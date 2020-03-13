import {
  Vue,
  Component,
  Prop,
  Model,
  Emit,
  Watch,
} from 'vue-property-decorator';
import bhabgsLabel from './label';

interface StateData {
  value: string;
}

export interface labelMap {
  title: string;
  icon?: string;
  value: string;
}

export { bhabgsLabel };

@Component({
  components: { bhabgsLabel },
})
export default class RadioGroupLabel extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: [],
  })
  private map!: Array<labelMap>;

  @Prop({
    type: String,
    default: 'small',
  })
  private size!: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  private hasTitle?: boolean;

  @Prop({
    default: 'Title',
    required: false,
    type: String,
  })
  private title!: string;

  @Model('input', { type: String })
  private value!: string;

  @Watch('value')
  private asyncChangeVal() {
    this.state.value = this.value;
  }

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
          <a-icon type={icon || 'appstore'} />
        </a-radio-button>
      </a-tooltip>
    );
  }

  render() {
    const { renderTip, state, title, $slots, onChange, size, hasTitle } = this;
    return (
      <bhabgsLabel title={title} hasTitle={hasTitle}>
        {$slots.title ? <div slot='title'>{$slots.title}</div> : ''}
        <a-radio-group
          onChange={onChange}
          size={size}
          v-model={state.value}
          slot='control'
        >
          {this.map.map((item, key) => {
            return renderTip(item.title, item.icon || '', item.value);
          })}
        </a-radio-group>
      </bhabgsLabel>
    );
  }
}
