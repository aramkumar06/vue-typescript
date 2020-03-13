import { Vue, Component, Prop } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class BbhabgsLabel extends Vue {
  @Prop({
    type: String,
    default: '',
  })
  private title!: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  private hasTitle?: boolean;

  private get renderLabel(): JSX.Element | VNode[] {
    const { $slots, title } = this;
    if ($slots.title) {
      return $slots.title;
    }
    return <div class='bhabgs_form_item_label'>{title}</div>;
  }

  render(): JSX.Element {
    const { renderLabel, $slots, hasTitle } = this;
    return (
      <div class='bhabgs_form_item'>
        {hasTitle ? renderLabel : ''}
        <div class='bhabgs_form_item_control'>{$slots.control}</div>
      </div>
    );
  }
}
