import { Vue, Component } from 'vue-property-decorator';
import AlertCard from '@/views/editor/components/alert_card';

@Component({
  components: { AlertCard },
})
export default class ComponentsList extends Vue {
  private render() {
    const alertCardComponents = {
      props: {
        title: '组件列表',
        hasFooter: false,
        type: 'list',
      },
    };
    return (
      <AlertCard {...alertCardComponents}>
        <div slot='body'>
          <div class='list_groups'>
            <div class='group'>
              <div class='group_title'></div>
              <ul>
                <li>component</li>
              </ul>
            </div>
          </div>
        </div>
      </AlertCard>
    );
  }
}
