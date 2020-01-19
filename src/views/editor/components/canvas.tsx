import { Vue, Component } from 'vue-property-decorator';

@Component
export default class EditCanvas extends Vue {
  private render() {
    return <div id='edit_canvas'>edit_canvas</div>;
  }
}
