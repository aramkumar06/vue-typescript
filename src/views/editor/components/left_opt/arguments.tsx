import { Component, Ref, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import AlertCard from '@/views/editor/components/alert_card';
import edit from '../code_edit';

const editOpt = namespace('editOpt');

@Component({
  components: {
    edit,
    AlertCard,
  },
})
export default class globalArgs extends Vue {
  @Ref() readonly edit!: any;

  @editOpt.Mutation private MUT_COLLAPSED!: Function;

  @editOpt.Mutation private SETGLOBALARGS!: Function;

  @editOpt.Getter private globalArgs!: string;

  get getGlobalArgs(): string {
    return this.globalArgs;
  }

  private save() {
    const { edit, SETGLOBALARGS, MUT_COLLAPSED } = this;
    const val = edit.getvalue();
    SETGLOBALARGS(val);
    MUT_COLLAPSED(false);
  }

  private render() {
    const { save } = this;
    const alertCardComponentsTree = {
      props: {
        hasTitle: false,
        type: 'globalArgs',
      },
      attrs: {
        style: 'height:100%;',
      },
      on: {
        save,
      },
    };
    return (
      <AlertCard {...alertCardComponentsTree}>
        <edit ref='edit' slot='body' style='height:100%;' />
      </AlertCard>
    );
  }
}
