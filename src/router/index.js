import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import chartsRouter from './modules/charts'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // 威胁事件
  // {
  //   path: '/system',
  //   component: Layout,
  //   redirect: '/system/all',
  //   name: '系统信息',
  //   meta: {
  //     title: '系统信息',
  //     icon: 'documentation'
  //   },
  //   children: [
  //     {
  //       path: 'all',
  //       name: 'allsystem',
  //       component: () => import('@/views/system/allSystem'),
  //       meta: { title: '所有系统', noCache: true }
  // },
  // {
  //   path: 'sys/:id',
  //   name: 'system',
  //   component: () => import('@/views/system/sys'),
  //   meta: { title: 'system', noCache: true }
  // },
  //   ]
  // },
  // 威胁事件
  {
    path: '/threaten',
    component: Layout,
    redirect: '/threaten/manage',
    name: '威胁管理',
    meta: {
      title: '威胁管理',
      icon: 'bug'
    },
    children: [
      {
        path: 'source',
        name: 'source',
        component: () => import('@/views/threaten/source'),
        meta: { title: '攻击来源' }
      },
      {
        path: 'status',
        name: 'status',
        component: () => import('@/views/threaten/status'),
        meta: { title: '威胁状态' }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/threaten/list'),
        meta: { title: '威胁列表' },
      },
      {
        path: 'detail',
        hidden: true,
        name: 'detail',
        component: () => import('@/views/threaten/detail'),
        meta: { title: '威胁详情', noCache: true },
      },
      {
        path: 'playback',
        hidden: true,
        name: 'playback',
        component: () => import('@/views/threaten/playback'),
        meta: { title: '攻击回放', noCache: true },
      },
      {
        path: '/sourcedetail',
        hidden: true,
        name: 'sourceDetail',
        component: () => import('@/views/threaten/sourceDetail'),
        meta: { title: '来源详情', noCache: true },
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  // {
  //   path: '/castration',
  //   component: Layout,
  //   redirect: '/castration/all',
  //   name: '业务系统',
  //   meta: { title: '123123' },
  //   children: [
  //     {
  //       path: 'all',
  //       component: () => import('@/views/castration/allsystem.vue'),
  //       name: '所有系统',
  //       meta: { title: '所有系统', icon: 'dashboard' }
  //     },
  //     {
  //       path: 'system',
  //       component: () => import('@/views/castration/system.vue'),
  //       name: '123',
  //       meta: { title: '123', icon: 'dashboard' }
  //     }
  //   ]
  // },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/search',
    name: '访问来源',
    children: [
      {
        path: 'search',
        component: () => import('@/views/user/usersearch.vue'),
        name: '用户搜索',
        meta: { title: '用户搜索', icon: 'search' }
      },
      {
        hidden: true,
        path: 'userdetail',
        component: () => import('@/views/user/userdetail.vue'),
        name: '用户详情',
        meta: { title: '用户详情' }
      },
      {
        hidden: true,
        path: 'info',
        component: () => import('@/views/user/info.vue'),
        name: 'info',
        meta: { title: '访问事件' }
      },
    ]
  },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'Icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  /** when your routing map is too long, you can split it into small modules **/
  // chartsRouter,
  // nestedRouter,

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'PDF', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'Theme', icon: 'theme' }
  //     }
  //   ]
  // },

  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'Clipboard', icon: 'clipboard' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!

]


const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
  window.sessionStorage.removeItem('new')
}

router.selfaddRoutes = function (params) {
  router.matcher = new Router({ mode: 'history' }).matcher;
  router.addRoutes(params)
}

export default router
