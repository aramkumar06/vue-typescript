import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { layout } from '@/utils/baseData/type';
import util from '../../util';

@Component
export default class Layout extends Vue {
  @Prop() private layoutId?: layout;

  private dragOverFn(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  @Emit()
  private dropfn(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const data = JSON.parse(e.dataTransfer.getData('componentInfo'));
    if (data.type === 'component') {
      data.id = `Component${util.getId()}`;
    } else if (data.type === 'layout') {
      data.id = `Layout${util.getId()}`;
    }
    return { componentInfo: data, currentComponent: this.layoutId };
  }

  render() {
    const slot = this.$slots.default;
    return (
      <div class='layout' ondragover={this.dragOverFn} ondrop={this.dropfn}>
        {slot}
      </div>
    );
  }
}
