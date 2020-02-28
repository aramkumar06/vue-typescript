import { Vue, Component, Model, Emit, Prop } from 'vue-property-decorator';

interface Event {
  target: { value: any };
}

@Component
export default class SliderInput extends Vue {
  @Model('input', { type: Number })
  private value!: number;

  @Emit('input')
  private changeValue(e: number) {
    return e;
  }

  @Prop({
    type: Number,
    default: 1,
  })
  private step?: number;

  @Prop({
    type: Number,
    default: 100,
  })
  private max?: number;

  @Prop({
    type: Number,
    default: 1,
  })
  private min?: number;

  @Prop({
    type: String,
    default: 'px',
  })
  private unit?: string;

  @Prop({
    type: String,
    default: 'default',
  })
  private size?: 'small' | 'large' | 'default';

  private state = {
    value: 0,
  };

  private created() {
    this.state.value = this.value;
  }

  private render() {
    const { state } = this;
    return (
      <a-row>
        <a-col span='12'>
          <a-slider
            onChange={(e: Event) => {
              this.changeValue(state.value);
            }}
            v-model={state.value}
            step={this.step}
          />
        </a-col>
        <a-col span='4' style='margin-left: .3rem;'>
          <a-input-number
            type={this.unit}
            min={this.min}
            max={this.max}
            step={this.step}
            v-model={state.value}
          />
        </a-col>
      </a-row>
    );
  }
}
