import { Vue, Component } from 'vue-property-decorator';
import { namespace, Getter, Mutation } from 'vuex-class';
import AlertCard from '@/views/editor/components/alert_card';
import { page, component } from '@/utils/baseData/type';

const editData = namespace('editData');

@Component({
  components: { AlertCard },
})
export default class ComponentsTree extends Vue {
  @editData.Getter private getPageContent!: any;

  get getPageContentInfo(): any {
    // return this.getPageContent;
    return [
      {
        name: '加药详情1',
        id: 'addMedicineDetail1',
        key: 'addMedicineDetail1',
        scopedSlots: { title: 'page' },
        children: [
          {
            id: 'Layout1581922385',
            key: 'Layout1581922385',
            name: 'row-layout1',
            scopedSlots: { title: 'layout' },
            type: 'layout',
            style: {},
            children: [
              {
                name: '卡片1',
                scopedSlots: { title: 'component' },
                type: 'component',
                style: {},
                permissions: {},
                prop: {},
                id: 'Component1581922391',
                key: 'Component1581922391',
              },
              {
                name: '卡片2',
                scopedSlots: { title: 'component' },
                type: 'component',
                style: {},
                permissions: {},
                prop: {},
                id: 'Component1581922392',
                key: 'Component1581922392',
              },
            ],
          },
        ],
        event: [],
      },
    ];
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
                {...{
                  scopedSlots: {
                    component: (obj: any) => {
                      return <span>{obj.name}</span>;
                    },
                    layout: (obj: any) => {
                      return <span>{obj.name}</span>;
                    },
                    page: (obj: any) => {
                      return <span>{obj.name}</span>;
                    },
                  },
                }}
              ></a-tree>
            );
          })}
        </div>
      </AlertCard>
    );
  }
}
