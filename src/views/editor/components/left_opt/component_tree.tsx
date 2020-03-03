import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import AlertCard from '@/views/editor/components/alert_card';
import { page, children } from '@/store/pageType';

const pageData = namespace('pageData');

@Component({
  components: { AlertCard },
})
export default class ComponentsTree extends Vue {
  @pageData.Getter private getPageContent!: page;

  @pageData.State((state) => state.activeKey)
  private activeKey!: string;

  @pageData.Mutation private SET_ACTIVEKEY!: Function;

  get getPageContentInfo(): page[] {
    return [this.getPageContent];
  }

  private selectFn(name: string[], obj: children) {
    if (name[0] === 'page') {
      return;
    }
    this.SET_ACTIVEKEY(name[0]);
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
