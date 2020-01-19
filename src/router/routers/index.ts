/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 15:40:23
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-15 11:33:06
 */

import {
  /* eslint-disable */
  RouteConfig,
} from 'vue-router';
import Layout from '@/views/layout';
import Overview from '@/views/overview';
import Project from '@/views/project/index';
import Module from '@/views/project/module';
import Editor from '@/views/editor/editor_layout';
import template from '@/utils/routerView';

const path: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'index',
        component: Overview,
      },
      {
        path: 'project',
        component: template,
        children: [
          {
            path: '/',
            name: 'project',
            component: Project,
          },
          {
            path: 'module/:pid/:mid',
            name: 'module',
            component: Module,
          },
        ],
      },
    ],
  },
  {
    path: '/editor/:pid/:mid/:vid',
    name: 'editor',
    component: Editor,
  },
];

export default path;
