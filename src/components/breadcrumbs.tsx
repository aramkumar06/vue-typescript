import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Breadcrumbs extends Vue {
  private items = [
    {
      text: '项目',
      disabled: false,
    },
    {
      text: '页面管理',
      disabled: false,
    },
    {
      text: '页面详情',
      disabled: true,
    },
  ];

  private render(): JSX.Element {
    const { items } = this;
    return (
      <a-breadcrumb>
        {items.map((i: any, key: number) => {
          return <a-breadcrumb-item key={key}>{i.text}</a-breadcrumb-item>;
        })}
      </a-breadcrumb>
    );
  }
}
