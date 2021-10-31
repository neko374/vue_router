import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "关于"
    }
  },
  {
    path: '/myfile',
    name: 'MyFile',
    component: () => import('../views/MyFileUpload.vue'),
    meta: {
      title: "上传"
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue'),
    meta: {
      title: "MOCK"
    }
  },
  {
    path: '/myimage',
    name: 'MyImage',
    component: () => import('../views/MyImage.vue'),
    meta: {
      title: "图片"
    }
  },
  {
    path: '/usercenter',
    name: 'UserCenter',
    component: () => import('../views/UserCenter.vue'),
    meta: {
      title: "用户中心"
    },
    children: [
      {
        path: "collect",
        component: () => import('../views/Collect.vue'),
        meta: {
          title: "收藏"
        }
      },
      {
        path: "order",
        component: () => import('../views/UserOrder.vue'),
        meta: {
          title: ""
        }
      },
      {
        path: "address",
        component: () => import('../views/UserAddress.vue'),
        meta: {
          title: "地址管理"
        }
      },
      {
        path: "funds",
        component: () => import('../views/UserFunds.vue'),
        meta: {
          title: ""
        }
      },
      {
        path: "score",
        component: () => import('../views/UserScore.vue'),
        meta: {
          title: "积分"
        },
        redirect: "score/list",
        children: [
          {
            path: "list",
            component: () => import('../views/ScoreList.vue'),
            meta: {
              title: "列表"
            }
          },
          {
            path: "total",
            component: () => import('../views/TotalScore.vue'),
            meta: {
              title: ""
            }
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: "登录"
    }
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import('../views/Tree.vue'),
    meta: {
      title: "树状图"
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../views/Reg.vue'),
    meta: {
      title: "注册"
    }
  },
  {
    path: '/test',
    name: 'Test',
    //局部，对一个路由
    // beforeEnter: (to, from, next) => {
    //   if (!sessionStorage.getItem("web22")) {
    //     window.alert("请登录")
    //     router.push("/login")
    //   } else {
    //     next()
    //   }
    // },
    component: () => import('../views/test.vue')
  },
  {
    path: '/detail',//  或者'/detail/:id?'
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    meta: {
      title: "详情"
    }
  },
  {
    path: '/usermanager',
    name: 'UserManager',
    component: () => import('../views/UserManager.vue'),
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/Error.vue'),
    meta: {
      title: "找不到页面"
    }
  },
  {
    path: "/*",
    redirect: "/error"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, save) => {
    return { y: 0 }
  },
  routes
  //滚动行为,换页面不记录位置 回顶部
})

// 全局路由
router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/usercenter") || to.path == "/shopcar") {
    //拦截以上面两个开头的页面,判断登录↓
    if (sessionStorage.getItem("web22")) {
      next()
    } else {
      window.alert("请登录")
      router.push("/login")
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = "鲜盟网"
  }
})

export default router
