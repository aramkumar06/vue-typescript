import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  render() {
    return (
      <div class='card'>
        <div class='img-part'>
          <div
            class='img'
            style={{
              backgroundImage: `url(http://iph.href.lu/150x100?text='卡片)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div class='text-part'>泵</div>
        <div class='params-part'>
          <div class='item'>电流: 123A</div>
          <div class='item'>电压: 234V</div>
        </div>
      </div>
    );
  }
}
