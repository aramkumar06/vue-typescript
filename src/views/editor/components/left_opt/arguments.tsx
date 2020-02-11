import { Component, Prop, Vue } from 'vue-property-decorator';
import AlertCard from '@/views/editor/components/alert_card';
import edit from '../code_edit';

@Component({
  components: {
    edit,
    AlertCard,
  },
})
export default class globalArgs extends Vue {
  private render() {
    const alertCardComponentsTree = {
      props: {
        hasTitle: false,
        type: 'globalArgs',
      },
      attrs: {
        style: 'height:100%;',
      },
    };
    return (
      <AlertCard {...alertCardComponentsTree}>
        <edit slot='body' style='height:100%;' />
      </AlertCard>
    );
  }
}
