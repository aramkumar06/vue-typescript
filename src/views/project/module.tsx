import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Module extends Vue {
  private State = {
    dataSource: [
      {
        title: '加药详情1',
      },
      {
        title: '加药列表',
      },
      {
        title: '加药详情',
      },
    ],
  };

  private show: boolean = true;

  private toHide() {
    this.show = !this.show;
  }

  private toEdit() {
    this.$router.push('/editor/:pid/:mid/:vid');
  }

  private get renderList(): JSX.Element {
    const { State } = this;
    const scopedSlots = {
      scopedSlots: {
        renderItem: (item: any) => {
          return (
            <a-list-item>
              <a-card title={item.title}>
                版本: V1.0
                <br />
                发布时间： 2019/03/11
                <br />
                设计人: 张鑫
                <br />
                <br />
                <a-button>发布</a-button>{' '}
                <a-button onClick={this.toEdit}>编辑</a-button>{' '}
                <a-button type='danger'>删除</a-button>
              </a-card>
            </a-list-item>
          );
        },
      },
    };
    return (
      <a-list
        grid={{ gutter: 16, column: 4 }}
        dataSource={State.dataSource}
        {...scopedSlots}
      />
    );
  }

  private render() {
    const { toHide, show, renderList } = this;

    return (
      <div id='p_module'>
        <a-divider>
          <a-button onClick={toHide} type='link'>
            {show ? '隐藏模块信息' : '显示模块信息'}
          </a-button>
        </a-divider>
        <transition name='m-down'>
          <div class='test_m_down' v-show={this.show}>
            <label htmlFor=''>
              项目编号：<span>xxxxxlllllssssllslsl</span>
            </label>
            <label htmlFor=''>
              项目名称：<span>东区智能化</span>
            </label>
            <label htmlFor=''>
              承担部门：<span>智冠工业事业部</span>
            </label>
            <label htmlFor=''>
              项目负责人：<span>魏鹏鹏</span>
            </label>
            <label htmlFor=''>
              模块：<span>智能加药</span>
            </label>
            <label htmlFor=''>
              模块负责人：<span>雷贺宁</span>
            </label>
            <label htmlFor=''>
              <a-button type='primary' icon='plus'>
                添加页面
              </a-button>
              &nbsp;
              <a-button type='primary' icon='edit'>
                编辑模块信息
              </a-button>
            </label>
          </div>
        </transition>
        <a-button
          type='primary'
          icon='plus'
          v-show={!show}
          style='margin-bottom:.5rem;'
        >
          添加页面
        </a-button>
        {renderList}
      </div>
    );
  }
}
