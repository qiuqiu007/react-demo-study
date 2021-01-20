import { defineConfig } from 'umi';

export default defineConfig({
  theme: {
    'primary-color': '#1DA57A',
  },
  antd: {},
  dva: {
    immer: true,
    hmr: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/fromDemo', component: '@/pages/fromDemo' },
    { path: '/fromValidator', component: '@/pages/fromValidator' },
    { path: '/fromTable', component: '@/pages/fromTable' },
    { path: '/paginationDemo', component: '@/pages/paginationDemo' }
  ],
});
