import { Vue, Component } from 'vue-property-decorator';
import { namespace, Getter, Mutation } from 'vuex-class';
import AlertCard from '@/views/editor/components/alert_card';

const pageData = namespace('pageData');

@Component({
  components: { AlertCard },
})
export default class ComponentsTree extends Vue {
  @pageData.Getter private getPageContent!: any;

  get getPageContentInfo(): any {
    return [this.getPageContent];
  }

  private selectFn(name: any) {
    console.log(name);
  }

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
        <div class='component-tree-body' slot='body'>
          {this.getPageContentInfo.map((item: any) => {
            return (
              <a-tree
                treeData={this.getPageContentInfo}
                onselect={this.selectFn}
                showLine
                replaceFields={{ title: 'name', key: 'id' }}
              ></a-tree>
            );
          })}
        </div>
      </AlertCard>
    );
  }
}
