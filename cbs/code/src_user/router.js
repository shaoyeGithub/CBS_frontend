/**
 * Created by liuwei on 2017/5/8.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面布局元素
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'
import ControlSidebar from '@/components/layout/ControlSidebar'
import Content from '@/components/layout/Content'

// 自定义组件
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import PageNotFound from '@/components/PageNotFound'

import User from '@/components/system/User'
import Role from '@/components/system/Role'

import Profile from '@/components/Profile'

// 功能组件
import Call from '@/components/subcomponents/Call'
import UserAnalysis from '@/components/subcomponents/UserAnalysis'
import ManyAnalysis from '@/components/subcomponents/ManyAnalysis'
import AdminAnalysis from '@/components/subcomponents/AdminAnalysis'
import UserMap from '@/components/subcomponents/UserMap'
import Package from '@/components/subcomponents/Package'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                header: Header,
                sidebar: Sidebar,
                footer: Footer,
                controlSidebar: ControlSidebar,
                default: Content
            },
            children: [
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: {
                        name: "仪表盘"
                    }
                },

                // 系统管理
                {
                    path: '/system/user',
                    component: User,
                    meta: {
                        name: "用户"
                    }
                },
                {
                    path: '/system/role',
                    component: Role,
                    meta: {
                        name: "角色"
                    }
                },
                

                {
                    path: '/:username/profile',
                    component: Profile,
                    meta: {
                        name: "首选项"
                    }
                },

                {
                    path: '/subcomponents/call',
                    component: Call,
                    meta: {
                        name: "模拟打电话"
                    }
                },
                {
                    path: '/subcomponents/UserAnalysis',
                    component: UserAnalysis,
                    meta: {
                        name: "图表分析"
                    }
                },
                {
                    path: '/subcomponents/ManyAnalysis',
                    component: ManyAnalysis,
                    meta: {
                        name: "图表分析"
                    }
                },{
                    path: '/subcomponents/AdminAnalysis',
                    component: AdminAnalysis,
                    meta: {
                        name: "管理员分析"
                    }
                },
                {
                    path: '/subcomponents/UserMap',
                    component: UserMap,
                    meta: {
                        name: "用户地图"
                    }
                },{
                    path: '/subcomponents/Package',
                    component: Package,
                    meta: {
                        name: "套餐信息"
                    }
                }


            ]
        },
        {
            path: '/login',
            component: Login,
            meta: {
                ignore: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                ignore: true
            }
        },
        {
            path: '*',
            component: PageNotFound,
            meta: {
                ignore: true
            }
        }
    ]
})
