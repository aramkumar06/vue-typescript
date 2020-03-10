import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import AlertCard from '@/views/editor/components/alert_card';

const baseData = namespace('baseData');

@Component({
  components: { AlertCard },
})
export default class ComponentsList extends Vue {
  @baseData.Getter private getBaseData!: any[];

  private get componentBaseData() {
    return this.getBaseData;
  }

  private selectDefaultValue: string = 'baseComponent';

  private componentListLoopBody: any[] = [];

  private componentType: any[] = [
    {
      code: 'baseComponent',
      title: '基础组件',
    },
  ];

  private mounted() {
    this.changeSelect('baseComponent');
  }

  private changeSelect(value: string) {
    switch (value) {
      case 'baseComponent':
        this.componentListLoopBody = this.componentBaseData;
        break;
      default:
        this.componentListLoopBody = [];
    }
  }

  private dragStartFn(e: any, obj: any) {
    const componentInfo =
      Object.prototype.toString.call(obj) === '[object Object]'
        ? JSON.stringify(obj)
        : obj;
    e.dataTransfer.setData('componentInfo', componentInfo);
  }

  private render() {
    const alertCardComponents = {
      props: {
        title: '组件列表',
        hasFooter: false,
        type: 'list',
      },
    };
    const imgUrl = 'http://iph.href.lu/150x100';
    return (
      <AlertCard {...alertCardComponents}>
        <div class='component-list-body' slot='body'>
          <a-select
            defaultValue={this.selectDefaultValue}
            onChange={this.changeSelect}
            style='width: 100%;'
          >
            {this.componentType.map((item) => {
              return (
                <a-select-option value={item.code}>
                  {item.title}
                </a-select-option>
              );
            })}
          </a-select>
          <div class='list-component'>
            {this.componentListLoopBody.map((item) => {
              return (
                <div class='component'>
                  <div class='component-title'>{item.name}</div>
                  <div
                    class='component-pic'
                    draggable='true'
                    ondragstart={(e: Event) => {
                      this.dragStartFn(e, item);
                    }}
                    style={{
                      backgroundImage: `url(${imgUrl}?text=${item.name})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </AlertCard>
    );
  }
}
