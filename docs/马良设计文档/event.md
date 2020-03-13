<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-12 11:31:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-12 15:23:40
 -->

# 页面事件中心

> 页面事件分为 页面加载前、 页面加载后、 自定义事件
>
> 事件类型分为 ajax、自定义、定时事件
>
> speed 当 `type=== 'timing'` 时会生效，
>
> datas 为保存在 数据面板的 key 集合
>
> install 为具体实现

```typescript
const Event = {
    getData: {
        cycle: 'created' | 'mounted' | 'custom', // custom 为点击或者某个接口请求完成后的事件
        type: 'ajax' | 'custom' | 'timing',
        speed: 1000,
        datas: [],// 如果type=== ’ajax‘ 那么会存入 s_${data_source_id}
        install() {
            // 该方法为具体实现
            // 如果为ajax 那么会自行调用全局封装的ajax方法，并对对应的 s_${data_source_id}数据进行处理
            //
        }
    },
    ...
}
```
