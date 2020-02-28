import { Vue, Component, Model, Emit, Prop } from 'vue-property-decorator';

interface Event {
  target: { value: any };
}

@Component
export default class ColorInput extends Vue {
  @Model('input', { type: String })
  private value!: string;

  @Emit('input')
  private changeValue(e: string) {
    return e;
  }

  @Prop({
    type: String,
    default: 'default',
  })
  private size?: 'small' | 'large' | 'default';

  private state = {
    value: '#000000',
  };

  private created() {
    this.state.value = this.value;
  }

  private render() {
    const { state } = this;
    return (
      <a-input class='color_input' value={state.value} size={this.size}>
        <input
          slot='addonBefore'
          v-model={state.value}
          type='color'
          onChange={(e: Event) => {
            this.changeValue(e.target.value);
          }}
        />
      </a-input>
    );
  }
}
