import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const editOpt = namespace('editOpt');

interface StateData {
  spinning: boolean;
}

@Component
export default class AlertCard extends Vue<StateData> {
  @Prop({
    default: 'Title',
    type: String,
  })
  private title?: string;

  @Prop({
    default: true,
    type: Boolean,
  })
  private hasTitle?: boolean;

  @Prop({
    default: true,
    type: Boolean,
  })
  private hasFooter?: boolean;

  @Prop({
    default: true,
    type: String,
  })
  private type?: string;

  private State = {
    spinning: false,
  };

  @Emit('save')
  private save(i: any) {}

  private getComponents() {
    if (this.State.spinning) {
      return;
    }
    this.State.spinning = true;
    // to do
    setTimeout(() => {
      this.State.spinning = false;
    }, 1200);
  }

  @editOpt.Mutation private MUT_COLLAPSED: any;

  private closeCollapsed(item: string, e: Event) {
    if (item === 'save') {
      this.save(item);
    }
  }

  private get renderTitle(): JSX.Element {
    const { title, getComponents } = this;
    return (
      <div class='title'>
        <span>{title}</span>
        <a-button-group size='small' class='right_opt'>
          <a-tooltip placement='right'>
            <template slot='title'>
              <span>获取最新组建</span>
            </template>
            <a-button type='primary' icon='reload' onClick={getComponents} />
          </a-tooltip>
        </a-button-group>
      </div>
    );
  }

  private get renderFooter(): JSX.Element {
    return (
      <div class='footer'>
        <a-button
          type='primary'
          onClick={this.closeCollapsed.bind(Event, 'save')}
        >
          保 存
        </a-button>
        <a-button style='margin-left:.3rem;' onClick={this.closeCollapsed}>
          关 闭
        </a-button>
      </div>
    );
  }

  private render() {
    const {
      $slots,
      hasTitle,
      renderTitle,
      hasFooter,
      renderFooter,
      State,
      type,
    } = this;

    // 在不存在 ￥slots.title 时 渲染title
    function renderTitleAnNoSlotsTitle() {
      return hasTitle ? renderTitle : '';
    }
    return (
      <div class='alert_card'>
        {$slots.title ? $slots.title : renderTitleAnNoSlotsTitle()}

        {type === 'globalArgs' ? (
          $slots.body
        ) : (
          <a-spin class='body' spinning={State.spinning}>
            {$slots.body}
          </a-spin>
        )}
        {hasFooter ? renderFooter : ''}
      </div>
    );
  }
}
