import { login, logout, getSystem } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import Layout from '@/layout'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  },
  SET_SYSTEM: (state, system) => {
    state.system = system
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { user, pwd } = userInfo
    return new Promise((resolve, reject) => {
      login({ user: user.trim(), pwd: pwd }).then(response => {
        commit('SET_TOKEN', 'admin-token')
        setToken('admin-token')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getSystem({ commit, state, }) {
    return new Promise((resolve, reject) => {
      getSystem().then(response => {
        const { data } = response
        if (data.length < 2) {
          var menus = [{
            path: '/system',
            component: Layout,
            redirect: '/system/all',
            name: '系统信息',
            meta: {
              title: '系统信息',
              icon: 'documentation'
            },
            children: [
              {
                path: 'sys',
                name: data[0].name,
                component: () => import('@/views/system/sys.vue'),
                meta: { title: data[0].name, noCache: true, sysid: data[0].sysid }
              }
            ]
          },
          {
            path: '/castration',
            component: Layout,
            redirect: '/castration/all',
            name: '业务系统',
            meta: { title: '业务系统', icon: 'documentation' },
            children: [
              {
                path: 'system',
                component: () => import('@/views/castration/system.vue'),
                name: data[0].name,
                meta: { title: data[0].name, sysid: data[0].sysid }
              }
            ]
          }
          ]
        } else {
          var menus = [{
            path: '/system',
            component: Layout,
            redirect: '/system/all',
            name: '系统信息',
            meta: {
              title: '系统信息',
              icon: 'documentation'
            },
            children: [
              {
                path: 'all',
                name: 'allsystem',
                component: () => import('@/views/system/allSystem.vue'),
                meta: { title: '所有系统', noCache: true }
              },
            ]
          }, {
            path: '/castration',
            component: Layout,
            redirect: '/castration/all',
            name: '业务系统',
            meta: { title: '业务系统', icon: 'documentation' },
            children: [
              {
                path: 'all',
                component: () => import('@/views/castration/allsystem.vue'),
                name: '所有系统',
                meta: { title: '所有系统' }
              },
            ]
          }
          ]
          for (let i = 0; i < data.length; i++) {
            menus[0].children.push({
              path: 'sys' + data[i].sysid,
              name: data[i].name,
              params: { sysid: data[i].sysid },
              component: () => import('@/views/system/sys.vue'),
              meta: { title: data[i].name, noCache: true }
            })
            menus[1].children.push({
              path: data[i].name + data[i].sysid,
              name: data[i].name,
              params: { sysid: data[i].sysid },
              component: () => import('@/views/castration/system.vue'),
              meta: { title: data[i].name, noCache: true }
            })
          }
        }
        commit('SET_MENUS', menus)
        commit('SET_SYSTEM', data)
        resolve(menus)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout().then((res) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_MENUS', [])
        window.sessionStorage.removeItem('user')
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // // remove token
  // resetToken({ commit }) {
  //   return new Promise(resolve => {
  //     commit('SET_TOKEN', '')
  //     commit('SET_ROLES', [])
  //     removeToken()
  //     resolve()
  //   })
  // },

  // // dynamically modify permissions
  // changeRoles({ commit, dispatch }, role) {
  //   return new Promise(async resolve => {
  //     const token = role + '-token'

  //     commit('SET_TOKEN', token)
  //     setToken(token)

  //     const { roles } = await dispatch('getInfo')

  //     resetRouter()

  //     // generate accessible routes map based on roles
  //     const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

  //     // dynamically add accessible routes
  //     router.addRoutes(accessRoutes)

  //     // reset visited views and cached views
  //     dispatch('tagsView/delAllViews', null, { root: true })

  //     resolve()
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
