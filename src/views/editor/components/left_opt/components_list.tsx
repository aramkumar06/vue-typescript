import { Vue, Component } from 'vue-property-decorator';
import AlertCard from '@/views/editor/components/alert_card';
import layoutData from '@/utils/baseData/layoutData';
import componentData from '@/utils/baseData/componentData';

@Component({
  components: { AlertCard },
})
export default class ComponentsList extends Vue {
  private selectDefaultValue: string = 'layout';

  private componentListLoopBody: any[] = [];

  private componentType: any[] = [
    {
      code: 'layout',
      title: '布局组件',
    },
    {
      code: 'baseComponent',
      title: '基础组件',
    },
    /*   {
      code: 'components',
      title: '组件群',
    }, */
  ];

  private mounted() {
    this.changeSelect('layout');
  }

  private changeSelect(value: string) {
    switch (value) {
      case 'layout':
        this.componentListLoopBody = layoutData;
        break;
      case 'baseComponent':
        this.componentListLoopBody = componentData;
        break;
      case 'components':
        this.componentListLoopBody = [];
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
