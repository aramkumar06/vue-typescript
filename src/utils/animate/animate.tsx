import { Vue, Component, Prop } from 'vue-property-decorator';
import './animate.less';

@Component
export default class FadeInOut extends Vue {
  @Prop({
    type: String,
    default() {
      return 'fade';
    },
  })
  private name!: string;

  @Prop({
    type: String,
    default: 0,
  })
  private from: string = '0px';

  @Prop({
    type: String,
    default: 0,
  })
  private to: string = '100px';

  private mDown = {
    AfterEnter: (e: HTMLAnchorElement) => {
      this.$nextTick(() => {
        e.style.height = this.to;
      });
    },
    BeforeLeave: (e: HTMLAnchorElement) => {
      e.style.height = this.from;
    },
  };

  private render() {
    const { $slots, name, mDown } = this;
    if (name === 'm-down') {
      return (
        <transition
          name={name}
          class='213'
          onBeforeLeave={mDown.BeforeLeave}
          onAfterEnter={mDown.AfterEnter}
        >
          {$slots.default || []}
        </transition>
      );
    }
    return (
      <transition name={name} class='213'>
        {$slots.default || []}
      </transition>
    );
  }
}
