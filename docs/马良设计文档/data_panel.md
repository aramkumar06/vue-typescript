<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-12 11:21:19
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-12 16:49:48
 -->

# 页面数据面板

> 页面数据面板 有 <code>s\_\${data_source_id}与 base</code>
> 当添加一条数据源时， 会在 data_panel 的 data_sourcees 下插入一条对应该数据源的信息

```typescript


interface DataPanel {
    data_sourcees: {
        s_${1}: {
            ...Data_source;
        };
        s_${2}: {
            ...Data_source;
        }
    };
    base: {} // 页面静态数据 可自行添加， 添加后生成结构与 in out 一样
}

```
