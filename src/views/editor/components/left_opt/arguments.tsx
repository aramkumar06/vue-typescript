import { Component, Ref, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import AlertCard from '@/views/editor/components/alert_card';

const editOpt = namespace('editOpt');

@Component({
  components: {
    AlertCard,
  },
})
export default class globalArgs extends Vue {
  @Ref() readonly edit!: any;

  @editOpt.Mutation private MUT_COLLAPSED!: Function;

  @editOpt.Mutation private SETGLOBALARGS!: Function;

  @editOpt.State((state) => state.globalArgs)
  private getGlobalArgs!: string;

  private save() {
    const { SETGLOBALARGS } = this;
    const val = this.edit.getvalue();
    SETGLOBALARGS(val);
    // MUT_COLLAPSED(false);
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
        <edit
          ref='edit'
          value={this.getGlobalArgs}
          slot='body'
          style='height:100%;'
        />
      </AlertCard>
    );
  }
}
