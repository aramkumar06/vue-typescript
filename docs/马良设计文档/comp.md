<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-03-11 15:41:51
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-03-12 17:03:40
 -->
<style>
h1{
    font-size: 3rem;
    padding: 2rem 0;
    display: block;
    text-align: center;
}
h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.7rem;
}

h4 {
    font-size: 1.5rem;
    height: 3rem;
    line-height: 3rem;
    margin: 0;
    padding: 0;
}
li {
   padding-left: .5rem;
}
</style>

# 马良数据结构图 - 马良组件

> 组件分为 基础组件、组装组件、系统组件、第三方添加组件
> 组件的使用方为成功注册的 vue 组件标签形式引入，所以 `compName` 必须为 项目内 vue 已注册组件

## 权限数据结构

```typescript
// 权限数据结构
type Permissions = {};
```

## comp compTree 组件结构与组件树结构 [type]()

```typescript
// 组件数据结构
interface comp {
  id: string;
  treeId: string;
  type: 'layout' | 'base' | 'custom' | 'system';
  compName: string;
  css: typestyle;
  prop: Object;
  children?: comp[];
  Permissions: Permissions;
}

// 组件列表
const compTree = Array<comp>;
```

- ## 简介

  > 有且只有当组件组件 `type === 'custom'`时，才会存在 children，当使用组装组件时，组装组件的子组件是不可删除的

- ### treeId

  > 记录组件位置 用于组件删除

- ### type - 组件的类型

  > 1. layout - 布局组件
  > 2. base - 基础组件
  > 3. custom - 自定义组装组件
  > 4. system - 系统组件

- ### compName vue 可用组件名称

  > <p>该参数为 项目内可使用组件名称</p>

- ### css 组件样式

  > 该参数为组件初始样式，如果用户或上传者没有填写那么会默认使用 baseStyle

- ### prop 组件接收参数

  > prop 参数只有当 `type === ('system' | 'base' | 'layout')` 该参数生效，通过数据面板将 prop 传入 马良页面数据中心

- ### Permissions 权限
  <p style='color:red; text-align:center;'>等待更新</p>
