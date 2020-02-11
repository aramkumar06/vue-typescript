/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 10:00:43
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-02-03 17:35:03
 */
import Vue, { Component } from 'vue';
import { ExtendedVue } from 'vue/types/vue';

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'vue/types/vue' {
  // 增加vue原型属性方法
  interface Vue {
    $ajax: any;
    $Editor: any;
  }

  interface VueConstructor<V extends Vue = Vue> {
    component<Data, Methods, Computed, Props>(
      id: string,
      definition: Component<Data, Methods, Computed, Props>,
    ): ExtendedVue<V, Data, Methods, Computed, Props>;
  }
}
