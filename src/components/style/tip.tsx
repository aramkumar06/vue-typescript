import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Tip extends Vue {
  @Prop({
    type: String,
    default: 'top',
  })
  private position?: string;

  @Prop({
    type: String,
    default: '',
  })
  private tip?: string;

  render() {
    return (
      <a-tooltip placement={this.position}>
        <template slot='title'>
          <span>{this.tip}</span>
        </template>
        {this.$slots.default}
      </a-tooltip>
    );
  }
}
