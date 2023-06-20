import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessages = () => import('../components/HomeMessages')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2.创建Router对象
const router = new Router({
  // 配置路由和组件之间的映射关系
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'messages',
          component: HomeMessages
        }
      ],
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: 'About',
      },
      // 路由独享守卫
      // beforeEnter: (to, from, next) => {
      //   console.log('About --- beforeEnter()');
      //   next()
      // }
      beforeEnter(to, from, next) {
        // console.log('About --- beforeEnter()');
        next()
      }
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: 'User',
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: 'Profile',
      },
    },
  ],
  mode: 'history',
  linkActiveClass: 'active',
})
// 前置钩子（Guard） --- 路由全局守卫
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title;
  next();
  // 可判断用户是否登录，若登录，则next(),否则next('/Login')
  // if (isLogin) {
  //   next()
  // } else {
  //   next('/login')
  // }
})

// 后置钩子（Hook） --- 路由全局守卫
router.afterEach((to, from) => {
  // console.log('afterEach()');
})
// 3.导出router
export default router;