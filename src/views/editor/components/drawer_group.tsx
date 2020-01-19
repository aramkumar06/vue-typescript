import { Vue, Component, Model, Prop } from 'vue-property-decorator';

@Component
export default class DrawerGroup extends Vue {
  @Prop()
  @Model('input', { type: String })
  public value!: string;

  public get getValue() {
    return this.value;
  }

  public onClose() {
    this.value = 'null';
  }

  public render() {
    const { onClose } = this;
    const style = {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e9e9e9',
      padding: '10px 16px',
      background: '#fff',
      textAlign: 'right',
    };
    return (
      <div class='drawer_group'>
        <a-drawer
          title='utils 全局公共函数设置'
          placement='right'
          width='30%'
          closable={false}
          onClose={onClose}
          visible={this.getValue === 'a'}
        >
          <div style={style}>
            <a-button onClick={onClose}>关闭</a-button>{' '}
            <a-button onClick={onClose} type='primary'>
              提交
            </a-button>
          </div>
        </a-drawer>
        {this.getValue}
      </div>
    );
  }
}
