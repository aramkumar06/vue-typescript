import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private render() {
    return (
      <a-layout-header id='header' style='width: 100%;'>
        <h1>Malyan</h1>
        <div class='right_opt'>
          <a-button ghost type='link'>
            登录
          </a-button>
          <a-button ghost type='link'>
            注销
          </a-button>
          <a-button type='primary' shape='circle' icon='user'></a-button>
        </div>
      </a-layout-header>
    );
  }
}
