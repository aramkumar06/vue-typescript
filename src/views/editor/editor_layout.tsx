import { Vue, Component } from 'vue-property-decorator';
import header from './components/header';
import * as leftOpt from './components/left_opt';
import RightOpt from './components/right_opt';
import Canvas from './canvas';

@Component({
  components: {
    cHeader: header,
    cSider: leftOpt.Sider,
    cCanvas: Canvas,
    RightOpt,
  },
})
export default class EditLayout extends Vue {
  private render() {
    return (
      <div id='edit_layout'>
        <cHeader />
        <div class='edit_body'>
          <cSider />
          <cCanvas />
          <RightOpt />
        </div>
      </div>
    );
  }
}
