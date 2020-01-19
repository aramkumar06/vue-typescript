import { Vue, Component } from 'vue-property-decorator';

Component.registerHooks(['beforeCreate']);
@Component
export default class Overview extends Vue {
  private State = {
    form: null,
    formData: {
      self: {
        projectname: 'ymznh',
        division: 'zggysyb',
        head: 'all',
        startTime: '',
        endTime: '',
      },
      projectname: [
        {
          label: '永明智能化',
          value: 'ymznh',
        },
        {
          label: '永明智能化1',
          value: 'ymznh1',
        },
      ],
      division: [
        {
          label: '智冠工业事业部',
          value: 'zggysyb',
        },
        {
          label: '智冠产品事业部',
          value: 'zgcpsyb',
        },
      ],
      head: [
        {
          label: '所有人',
          value: 'all',
        },
        {
          label: '张鑫',
          value: 'zx',
        },
        {
          label: '雷和宁',
          value: 'lhn',
        },
      ],
    },
    table: {
      columns: [
        {
          title: '项目编号',
          width: 200,
          dataIndex: 'project_id',
        },
        {
          title: '承担部门',
          dataIndex: 'division_name',
        },
        {
          title: '模块名称',
          width: 200,
          dataIndex: 'module_name',
        },
        {
          title: '产品负责人',
          width: 200,
          dataIndex: 'product_head',
        },
        {
          title: '页面数量',
          width: 200,
          dataIndex: 'page_number',
        },
        {
          title: '操作',
          dataIndex: 'opt',
          align: 'center',
          scopedSlots: {
            customRender: 'opt',
          },
        },
      ],
      data: [
        {
          project_id: '0101010225',
          division_name: '智冠工业事业部',
          module_name: '智能加药',
          product_head: '雷和宁',
          page_number: 3,
        },
      ],
      loading: true,
    },
  };

  private created() {
    this.State.form = this.$form.createForm(this);
    this.getProjectModules();
  }

  private getOptions(options: any[]): JSX.Element[] {
    return options.map((i: any, key: number) => {
      return (
        <a-select-option value={i.value} key={key}>
          {i.label}
        </a-select-option>
      );
    });
  }

  private getProjectModules() {
    this.State.table.loading = false;
  }

  private handleSubmit(e: Event) {
    e.preventDefault();

    this.State.table.loading = true;
    this.$nextTick(() => {
      this.getProjectModules();
    });
  }

  public render() {
    const { getOptions, State, handleSubmit, $router } = this;
    function goTo() {
      $router.push('/project/module/pid/mid');
    }
    const scopedSlots = {
      scopedSlots: {
        opt: () => {
          return (
            <a-button size='small' type='link' onClick={goTo}>
              模块管理
            </a-button>
          );
        },
      },
    };
    return (
      <div id='project-index'>
        <a-form form={State.form} onSubmit={handleSubmit} layout='inline'>
          <a-form-item label='事业部'>
            <a-select
              v-decorator={[
                'division',
                { initialValue: State.formData.self.division },
              ]}
              placeholder='请选择事业部'
            >
              {getOptions(State.formData.division)}
            </a-select>
          </a-form-item>

          <a-form-item label='项目名称'>
            <a-select
              v-decorator={[
                'projectname',
                { initialValue: State.formData.self.projectname },
              ]}
              placeholder='请选择项目名称'
            >
              {getOptions(State.formData.projectname)}
            </a-select>
          </a-form-item>

          <a-form-item label='负责人'>
            <a-select
              v-decorator={['head', { initialValue: State.formData.self.head }]}
              placeholder='请选择负责人'
            >
              {getOptions(State.formData.head)}
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button type='primary' html-type='submit'>
              搜索
            </a-button>
          </a-form-item>
        </a-form>
        <a-table
          columns={State.table.columns}
          dataSource={State.table.data}
          loading={State.table.loading}
          {...scopedSlots}
          rowKey='project_id'
          bordered
        ></a-table>
      </div>
    );
  }
}
