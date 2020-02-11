import { Vue, Component } from 'vue-property-decorator';
import AlertCard from '@/views/editor/components/alert_card';

@Component({
  components: { AlertCard },
})
export default class ComponentsTree extends Vue {
  private render() {
    const alertCardComponentsTree = {
      props: {
        title: '组件树',
        hasFooter: false,
        type: 'tree',
      },
    };
    return (
      <AlertCard {...alertCardComponentsTree}>
        <div slot='body'>tree</div>
      </AlertCard>
    );
  }
}
