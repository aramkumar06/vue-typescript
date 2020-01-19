import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  private render() {
    return <router-view />;
  }
}
