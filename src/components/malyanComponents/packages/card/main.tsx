import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import util from '../../util';

@Component
export default class Card extends Vue {
  @Prop() private layout?: any;

  render() {
    const slot = this.$slots.default;
    return (
      <div class='card'>
        card
      </div>
    );
  }
}
