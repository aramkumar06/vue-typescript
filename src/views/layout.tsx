import { Vue, Component } from 'vue-property-decorator';
import headerBox from '@/components/header/header';
import menuList from '@/components/menulist';
import Breadcrumbs from '@/components/breadcrumbs';

@Component({
  components: { headerBox, menuList, Breadcrumbs },
})
export default class Layout extends Vue {
  private render() {
    return (
      <div id='layout'>
        <headerBox />
        <div class='ml-body'>
          <menuList class='handle-left' />
          <div class='handle-right'>
            <Breadcrumbs />
            <router-view class='view_body' />
          </div>
        </div>
      </div>
    );
  }
}
