import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import filRedSty, { cloneStyle } from '@/utils/filredsty';
import { CANVAS_SETTING } from '@/store/modules/editOpt/type';
import { page } from '@/store/pageType';

const editOpt = namespace('editOpt');
const pageData = namespace('pageData');

@Component
export default class EditCanvas extends Vue {
  @editOpt.State((state) => state.CANVAS_SETTING)
  private getCanvasSetting!: CANVAS_SETTING;

  @editOpt.State((state) => state.globalArgs) private getGlobalArgs!: string;

  @pageData.State((state) => state.pageContent)
  private getPageContentInfo!: page;

  @pageData.State((state) => state.activeKey)
  private activeKey!: string;

  @pageData.Mutation private ADD_TO_CHILDREN!: Function;

  @pageData.Mutation private SET_ACTIVEKEY!: Function;

  private dragEnterFn(e: Event) {
    //
  }

  private dragOverFn(e: Event) {
    e.preventDefault();
  }

  private dropFn(e: any) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('componentInfo'));
    data.id = `Layout${Date.parse(new Date().toString()) / 1000}`;
    this.pageContentAddLayout(data);
  }

  private pageContentAddLayout(obj: any) {
    if (obj.type !== 'layout') {
      this.$message.error('请添加布局组件');
      return;
    }
    this.ADD_TO_CHILDREN({
      component: obj,
      parentId: this.getPageContentInfo.id,
    });
  }

  private layoutDronFn(obj: any) {
    this.ADD_TO_CHILDREN({
      component: obj.componentInfo,
      parentId: obj.currentComponent,
    });
  }

  private setClass(id: any) {
    return ['b_comp', this.activeKey === id ? 'comp_active' : ''];
  }

  private setlayout(arr: any[]) {
    return arr.map((item) => {
      const css = filRedSty(item.css);
      if (item.type === 'layout') {
        return (
          <layout
            ondropfn={this.layoutDronFn}
            layoutId={item.id}
            style={css}
            class={this.setClass(item.id)}
            nativeOnClick={(e: Event) => {
              e.stopPropagation();
              this.setActiveKey(item.id);
            }}
          >
            {this.setlayout(item.children)}
          </layout>
        );
      }
      return (
        <div
          style={css}
          class={this.setClass(item.id)}
          onClick={(e: Event) => {
            e.stopPropagation();
            this.setActiveKey(item.id);
          }}
        >
          将来我是组件{item.name}
        </div>
      );
    });
  }

  private setActiveKey(id: any) {
    this.SET_ACTIVEKEY(id);
    // this.activeKey = id;
  }

  private render() {
    const {
      getPageContentInfo,
      getCanvasSetting,
      getGlobalArgs,
      setActiveKey,
      dragEnterFn,
      dragOverFn,
      dropFn,
      layoutDronFn,
      activeKey,
    } = this;
    return (
      <div
        id='edit_canvas'
        ondragenter={dragEnterFn}
        ondragover={dragOverFn}
        ondrop={dropFn}
      >
        {/* setting：{JSON.stringify(getCanvasSetting)} <br />
        getGlobalArgs： {`\n${getGlobalArgs}`} */}
        {getPageContentInfo.children.map((item: any) => {
          const css = filRedSty(item.css);
          return (
            <layout
              ondropfn={layoutDronFn}
              layoutId={item.id}
              class={this.setClass(item.id)}
              style={css}
              nativeOnClick={(e: Event) => {
                e.stopPropagation();
                setActiveKey(item.id);
              }}
            >
              {this.setlayout(item.children)}
            </layout>
          );
        })}
        {/* <pre>{JSON.stringify(getPageContentInfo, null, '\t')}</pre> */}
      </div>
    );
  }
}
