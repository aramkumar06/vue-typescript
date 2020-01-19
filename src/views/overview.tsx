import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Overview extends Vue {
  public render() {
    return <div id='overview'>overview</div>;
  }
}
