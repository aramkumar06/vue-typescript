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

  private layoutDronFn(obj: any) {
    if (obj.parent.id === 'page' && obj.componentInfo.type !== 'layout') {
      this.$message.error('请添加布局组件');
      return;
    }
    this.ADD_TO_CHILDREN({
      component: obj.componentInfo,
      parent: obj.parent,
    });
  }

  private setClass(id: any) {
    return ['b_comp', this.activeKey === id ? 'comp_active' : ''];
  }

  private setlayout(arr: any[]) {
    return arr.map((item) => {
      const css = filRedSty(item.css);
      const text = item.css.font ? item.css.font.value : '';
      return (
        <item.component
          ondropfn={this.layoutDronFn}
          layout={item}
          style={css}
          class={this.setClass(item.id)}
          nativeOnClick={(e: Event) => {
            e.stopPropagation();
            this.setActiveKey(item.id);
          }}
        >
          {item.children && item.children.length > 0
            ? this.setlayout(item.children)
            : text}
        </item.component>
      );
    });
  }

  private setActiveKey(id: any) {
    this.SET_ACTIVEKEY(id);
  }

  private render() {
    const {
      getPageContentInfo,
      getCanvasSetting,
      getGlobalArgs,
      setActiveKey,
      activeKey,
    } = this;
    return (
      <layout
        id='edit_canvas'
        ondropfn={this.layoutDronFn}
        layout={getPageContentInfo}
      >
        {/* setting：{JSON.stringify(getCanvasSetting)} <br />
        getGlobalArgs： {`\n${getGlobalArgs}`} */}
        {this.setlayout(getPageContentInfo.children)}
      </layout>
    );
  }
}
