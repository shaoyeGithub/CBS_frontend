import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const Login = () =>import('@/components/Login')
const Index = () =>import('@/components/Index')
const Register = () =>import('@/components/Register')
const MainPage = () =>import('@/components/MainPage')
import menus from '@/config/menu-config'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
var routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage,
      children:[
        {
          path: `/${sub.componentName}`,
          name: sub.componentName,
          component: () => import(`@/components/${sub.componentName}`)
        }
      ]
    })
  })
})
routes.push({
  path: '/',
  name: 'Login',
  component: Login
},
{
  path: '/register',
  name: 'Register',
  component: Register
})
export default new Router({ routes })
