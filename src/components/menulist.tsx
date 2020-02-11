import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MenuList extends Vue {
  private current: string = '/';

  private change(e: any): void {
    this.current = e.key;
    this.$nextTick(() => {
      this.$router.push(this.current);
    });
  }

  render() {
    const { change, current } = this;
    return (
      <a-menu
        selectedKeys={[current]}
        defaultSelectedKeys={[current]}
        onClick={change}
        mode='inline'
      >
        <a-menu-item key='/'>
          <a-icon type='appstore' />
          总览
        </a-menu-item>
        <a-menu-item key='/project'>
          <a-icon type='appstore' />
          项目
        </a-menu-item>
      </a-menu>
    );
  }
}
